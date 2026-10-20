"""Monta el video final a partir de los clips generados con IA (clips_ia/).

Para cada bloque de diálogo usa clips_ia/clip_NN.mp4 (y clip_NN_antes.mp4 si
existe, para la acción sin diálogo previa). Si un clip todavía no existe, usa ese
mismo pedazo del cortometraje animado sin subtítulos, para que el video quede
completo mientras se generan los demás. Añade voces, música atenuada y el logo.

Uso:
  python3 produccion/montar_historia.py [--audio-clips] [--apertura] [--salida RUTA]
    --audio-clips  usa el audio que trae cada clip de IA en vez de las voces grabadas
    --apertura     antepone referencia_ia/apertura_original.mp4
"""
import argparse
import json
import os
import subprocess
import tempfile

import numpy as np
import soundfile as sf

from generar_musica import SR as SR_MUSICA, componer
from linea_tiempo import PAUSA
from preparar_animacion import ACCION_ANTES, COLA_HISTORIA

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CLIPS = os.path.join(RAIZ, "clips_ia")
VOCES = os.path.join(RAIZ, "salida", "voces")
ANIMADO = os.path.join(RAIZ, "salida", "Frisby_animado_sin_texto.mp4")
DATOS = os.path.join(RAIZ, "animacion", "src", "datos.json")
LOGO = os.path.join(RAIZ, "assets", "logo_mascota.jpg")
SR = 48000
NORMALIZA = "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,fps=30,format=yuv420p,setsar=1"


def duracion(ruta):
    r = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", ruta],
                       capture_output=True, text=True, check=True)
    return float(r.stdout.strip())


def tiene_audio(ruta):
    r = subprocess.run(["ffprobe", "-v", "error", "-select_streams", "a", "-show_entries", "stream=index", "-of", "csv=p=0", ruta],
                       capture_output=True, text=True)
    return bool(r.stdout.strip())


def ffmpeg(*args):
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", *args], check=True)


def leer_audio(ruta, inicio=0.0, dur=None):
    """audio mono a 48 kHz de cualquier archivo (video o wav)"""
    with tempfile.NamedTemporaryFile(suffix=".wav") as tmp:
        args = ["-ss", f"{inicio:.3f}", "-i", ruta]
        if dur:
            args = ["-ss", f"{inicio:.3f}", "-t", f"{dur:.3f}", "-i", ruta]
        ffmpeg(*args, "-vn", "-ac", "1", "-ar", str(SR), tmp.name)
        a, _ = sf.read(tmp.name, dtype="float32")
    return a


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--audio-clips", action="store_true")
    ap.add_argument("--apertura", action="store_true")
    ap.add_argument("--salida", default=os.path.join(RAIZ, "salida", "Frisby_historia.mp4"))
    op = ap.parse_args()

    with open(DATOS) as fh:
        datos = json.load(fh)
    fps = datos["fps"]
    tmp = tempfile.mkdtemp(prefix="montaje_")
    segmentos = []  # (ruta_video_normalizado, dur, audio_mono)
    usados, faltan = 0, []

    def segmento_clip(ruta, dur, voz):
        salida = os.path.join(tmp, f"s{len(segmentos):03}.mp4")
        largo = duracion(ruta)
        ffmpeg("-i", ruta, "-t", f"{dur:.3f}", "-vf", f"{NORMALIZA},tpad=stop_mode=clone:stop_duration={max(0, dur - largo) + 0.1:.3f}",
               "-t", f"{dur:.3f}", "-an", "-c:v", "libx264", "-crf", "18", "-preset", "fast", salida)
        if op.audio_clips and tiene_audio(ruta):
            audio = leer_audio(ruta, 0, dur)
        else:
            audio = voz
        segmentos.append((salida, dur, audio))

    def segmento_animado(inicio, dur):
        salida = os.path.join(tmp, f"s{len(segmentos):03}.mp4")
        ffmpeg("-ss", f"{inicio:.3f}", "-i", ANIMADO, "-t", f"{dur:.3f}", "-vf", NORMALIZA, "-an",
               "-c:v", "libx264", "-crf", "18", "-preset", "fast", salida)
        segmentos.append((salida, dur, None))

    if op.apertura:
        ap_ruta = os.path.join(RAIZ, "referencia_ia", "apertura_original.mp4")
        d = duracion(ap_ruta)
        segmento_clip(ap_ruta, d, leer_audio(ap_ruta))

    for b in datos["bloques"]:
        n = b["n"]
        voz, _ = sf.read(os.path.join(VOCES, f"voz_{n:02}.wav"), dtype="float32")
        voz = np.interp(np.arange(int(len(voz) * SR / 24000)) * 24000 / SR, np.arange(len(voz)), voz).astype(np.float32)
        dur = len(voz) / SR + PAUSA
        clip = os.path.join(CLIPS, f"clip_{n:02}.mp4")
        antes = os.path.join(CLIPS, f"clip_{n:02}_antes.mp4")
        if os.path.exists(clip):
            if os.path.exists(antes):
                segmento_clip(antes, duracion(antes), np.zeros(1, dtype=np.float32))
            segmento_clip(clip, dur, voz)
            usados += 1
        else:
            faltan.append(n)
            gap = ACCION_ANTES.get(n, 0)
            if gap:
                segmento_animado(b["inicio"] / fps - gap, gap)
                segmentos[-1] = (segmentos[-1][0], gap, np.zeros(1, dtype=np.float32))
            segmento_animado(b["inicio"] / fps, dur)
            segmentos[-1] = (segmentos[-1][0], dur, voz)

    if 56 in faltan:  # la cámara se aleja al final del cortometraje animado
        ultimo = datos["bloques"][-1]
        segmento_animado((ultimo["inicio"] + ultimo["dur"]) / fps, COLA_HISTORIA)
        segmentos[-1] = (segmentos[-1][0], COLA_HISTORIA, np.zeros(1, dtype=np.float32))

    # logo final
    logo = os.path.join(tmp, "logo.mp4")
    ffmpeg("-loop", "1", "-t", "5", "-i", LOGO, "-f", "lavfi", "-i", "color=c=0xF2CB25:s=1920x1080:d=5:r=30",
           "-filter_complex", "[0:v]scale=900:900[l];[1:v][l]overlay=(W-w)/2:(H-h)/2,fade=t=in:d=0.6,fade=t=out:st=4:d=1,format=yuv420p,setsar=1[v]",
           "-map", "[v]", "-t", "5", "-c:v", "libx264", "-crf", "18", logo)
    segmentos.append((logo, 5.0, np.zeros(1, dtype=np.float32)))

    # video continuo
    lista = os.path.join(tmp, "lista.txt")
    with open(lista, "w") as fh:
        fh.writelines(f"file '{s[0]}'\n" for s in segmentos)
    video = os.path.join(tmp, "video.mp4")
    ffmpeg("-f", "concat", "-safe", "0", "-i", lista, "-c", "copy", video)

    # pista de diálogo alineada con los segmentos
    total = sum(s[1] for s in segmentos)
    dialogo = np.zeros(int((total + 1) * SR), dtype=np.float32)
    t = 0.0
    for _, dur, audio in segmentos:
        if audio is not None and len(audio) > 1:
            i = int(t * SR)
            a = audio[: int(dur * SR)]
            dialogo[i:i + len(a)] += a
        t += dur
    voz_wav, mus_wav = os.path.join(tmp, "voz.wav"), os.path.join(tmp, "mus.wav")
    sf.write(voz_wav, dialogo, SR)
    sf.write(mus_wav, componer(total), SR_MUSICA)
    filtro = ("[1:a]pan=stereo|c0=c0|c1=c0,asplit=2[voz][sc];[2:a]volume=0.32[m];"
              "[m][sc]sidechaincompress=threshold=0.015:ratio=6:attack=30:release=500[mus];"
              "[voz][mus]amix=inputs=2:normalize=0:duration=longest[a]")
    ffmpeg("-i", video, "-i", voz_wav, "-i", mus_wav, "-filter_complex", filtro, "-map", "0:v", "-map", "[a]",
           "-t", f"{total:.3f}", "-c:v", "copy", "-c:a", "aac", "-b:a", "192k", "-movflags", "+faststart", op.salida)
    print(f"OK: {op.salida} ({total:.1f} s). Clips de IA usados: {usados}/56.")
    if faltan:
        print(f"Faltan {len(faltan)} clips (se usó el cortometraje animado): {', '.join(f'{n:02}' for n in faltan)}")


if __name__ == "__main__":
    main()
