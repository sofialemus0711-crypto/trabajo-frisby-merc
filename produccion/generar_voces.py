"""Sintetiza la voz de cada bloque de diálogo con Kokoro (TTS local, español).

Uso:  python3 produccion/generar_voces.py
Requiere: pip install kokoro-onnx soundfile, y en produccion/modelos/:
  kokoro-v1.0.onnx y voices-v1.0.bin
  (https://github.com/thewh1teagle/kokoro-onnx/releases/tag/model-files-v1.0)
Salida: salida/voces/voz_NN.wav y salida/voces/duraciones.json, que
linea_tiempo.py usa para ajustar el animatic a la duración real de cada voz.
"""
import json
import os
import subprocess
import tempfile

import numpy as np
import soundfile as sf
from kokoro_onnx import Kokoro

from linea_tiempo import linea_de_tiempo

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODELOS = os.path.join(RAIZ, "produccion", "modelos")
VOCES = os.path.join(RAIZ, "salida", "voces")

# Una voz distinta por protagonista: mezcla de estilos + tono (semitonos) + velocidad.
# C1 presentadora cálida, C2 más aguda y enérgica, C3 más grave y pausada.
PERFILES = {
    "C1": {"mezcla": {"ef_dora": 1.0}, "semitonos": 0.0, "velocidad": 1.0},
    "C2": {"mezcla": {"ef_dora": 0.6, "if_sara": 0.4}, "semitonos": 2.0, "velocidad": 1.05},
    "C3": {"mezcla": {"ef_dora": 0.6, "pf_dora": 0.4}, "semitonos": -2.0, "velocidad": 0.95},
}


def sintetizar(k, texto, perfil):
    estilo = sum(p * k.get_voice_style(v) for v, p in perfil["mezcla"].items())
    audio, sr = k.create(texto, voice=estilo, speed=perfil["velocidad"], lang="es")
    if perfil["semitonos"]:
        with tempfile.TemporaryDirectory() as tmp:
            a, b = os.path.join(tmp, "a.wav"), os.path.join(tmp, "b.wav")
            sf.write(a, audio, sr)
            factor = 2 ** (perfil["semitonos"] / 12)
            subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", a,
                            "-af", f"rubberband=pitch={factor:.4f}:formant=preserved", b], check=True)
            audio, sr = sf.read(b)
    return np.asarray(audio, dtype=np.float32), sr


def main():
    os.makedirs(VOCES, exist_ok=True)
    k = Kokoro(os.path.join(MODELOS, "kokoro-v1.0.onnx"), os.path.join(MODELOS, "voices-v1.0.bin"))
    duraciones = {}
    for n, b in enumerate(linea_de_tiempo(usar_voces=False), 1):
        if b["quien"] == "TODAS":
            pistas = [sintetizar(k, b["texto"], PERFILES[c]) for c in ("C1", "C2", "C3")]
            sr = pistas[0][1]
            largo = max(len(p[0]) for p in pistas)
            audio = sum(np.pad(p[0], (0, largo - len(p[0]))) for p in pistas) / 2.2
        else:
            audio, sr = sintetizar(k, b["texto"], PERFILES[b["quien"]])
        audio = audio / max(1e-6, np.abs(audio).max()) * 0.89
        sf.write(os.path.join(VOCES, f"voz_{n:02}.wav"), audio, sr)
        duraciones[str(n)] = round(len(audio) / sr, 3)
        print(f"{n:02} {b['quien']:5} {duraciones[str(n)]:5.2f}s  {b['texto'][:60]}")
    with open(os.path.join(VOCES, "duraciones.json"), "w") as fh:
        json.dump(duraciones, fh, indent=1)


if __name__ == "__main__":
    main()
