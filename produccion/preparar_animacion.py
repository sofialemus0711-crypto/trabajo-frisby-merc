"""Prepara los datos del cortometraje animado (animacion/, Remotion).

- Línea de tiempo a 30 fps: los 56 bloques de diálogo literales en orden, más
  pausas de acción sin diálogo (los personajes caminan, ponen la mesa, abren la
  puerta…) para que la historia respire.
- Envolvente de la voz por cuadro (0..1) para mover la boca de quien habla.
- Pista de audio maestra: voces + música de fondo atenuada bajo las voces.

Uso:  python3 produccion/preparar_animacion.py   (después de generar_voces.py)
Salida: animacion/src/datos.json, animacion/public/audio.wav
"""
import json
import os
import subprocess
import tempfile

import numpy as np
import soundfile as sf

from generar_musica import componer, SR as SR_MUSICA
from linea_tiempo import PAUSA, linea_de_tiempo

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ANIM = os.path.join(RAIZ, "animacion")
VOCES = os.path.join(RAIZ, "salida", "voces")
FPS = 30

# segundos de acción sin diálogo ANTES de cada bloque indicado
ACCION_ANTES = {
    1: 5.0,   # apertura: la sala de estudio, el estómago de Cami ruge
    8: 2.0,   # se acomodan juntas en el sofá alrededor del celular
    20: 2.5,  # Dani se levanta y va al tablero
    26: 3.0,  # Cami se pone la gorra y se para detrás del mesón; Vale se acerca
    30: 2.0,  # se reúnen a mirar el pedido en el mapa del celular
    38: 3.5,  # suena el timbre, Dani abre, el domiciliario entrega el pedido
    42: 2.5,  # ponen la mesa
    52: 9.0,  # el vecino solo en la puerta: lo invitan a compartir
    53: 2.5,  # cae la noche
}
COLA_HISTORIA = 3.0  # la cámara se aleja por la ventana después del último diálogo
LOGO = 5.0           # cierre con el logotipo oficial


def envolvente(audio, sr, n_cuadros):
    paso = sr / FPS
    trozos = [audio[int(i * paso):int((i + 1) * paso)] for i in range(n_cuadros)]
    env = np.array([np.sqrt(np.mean(x ** 2)) if len(x) else 0.0 for x in trozos])
    env = np.convolve(env, [0.25, 0.5, 0.25], mode="same")
    env = np.clip(env / (np.percentile(env, 95) + 1e-9), 0, 1)
    env[env < 0.12] = 0
    return [round(float(x), 2) for x in env]


def main():
    bloques_tl = linea_de_tiempo()
    t = 0.0
    bloques, escenas = [], []
    for n, b in enumerate(bloques_tl, 1):
        t += ACCION_ANTES.get(n, 0)
        if not escenas or escenas[-1]["num"] != b["escena"]:
            inicio_escena = t - ACCION_ANTES.get(n, 0)
            if escenas:
                escenas[-1]["fin"] = round(inicio_escena * FPS)
            escenas.append({"num": b["escena"], "inicio": round(inicio_escena * FPS)})
        audio, sr = sf.read(os.path.join(VOCES, f"voz_{n:02}.wav"), dtype="float32")
        dur = len(audio) / sr + PAUSA
        cuadros = round(dur * FPS)
        bloques.append({
            "n": n, "escena": b["escena"], "quien": b["quien"], "texto": b["texto"],
            "inicio": round(t * FPS), "dur": cuadros,
            "boca": envolvente(audio, sr, cuadros), "_t": t, "_audio": (audio, sr),
        })
        t += dur
    t += COLA_HISTORIA
    escenas[-1]["fin"] = round(t * FPS)
    total = t + LOGO

    # pista maestra: voces + música atenuada
    sr = 24000
    voces = np.zeros(int((total + 1) * sr), dtype=np.float32)
    for b in bloques:
        a, sra = b.pop("_audio")
        assert sra == sr
        i = int(b.pop("_t") * sr)
        voces[i:i + len(a)] += a
    os.makedirs(os.path.join(ANIM, "public"), exist_ok=True)
    with tempfile.TemporaryDirectory() as tmp:
        v, m = os.path.join(tmp, "v.wav"), os.path.join(tmp, "m.wav")
        sf.write(v, voces, sr)
        sf.write(m, componer(total), SR_MUSICA)
        filtro = ("[0:a]aresample=48000,pan=stereo|c0=c0|c1=c0,asplit=2[voz][sc];"
                  "[1:a]volume=0.32[mm];"
                  "[mm][sc]sidechaincompress=threshold=0.015:ratio=6:attack=30:release=500[mus];"
                  "[voz][mus]amix=inputs=2:normalize=0:duration=longest[a]")
        subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", v, "-i", m,
                        "-filter_complex", filtro, "-map", "[a]", "-t", f"{total:.3f}",
                        "-ar", "48000", "-c:a", "pcm_s16le",
                        os.path.join(ANIM, "public", "audio.wav")], check=True)

    datos = {"fps": FPS, "total": round(total * FPS), "logo": round(LOGO * FPS),
             "escenas": escenas, "bloques": bloques}
    with open(os.path.join(ANIM, "src", "datos.json"), "w", encoding="utf-8") as fh:
        json.dump(datos, fh, ensure_ascii=False)
    print(f"OK: {len(bloques)} bloques, {total:.1f} s, escenas:",
          [(e["num"], round(e["inicio"] / FPS, 1)) for e in escenas])


if __name__ == "__main__":
    main()
