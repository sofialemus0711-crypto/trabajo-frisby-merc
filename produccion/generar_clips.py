"""Corta el animatic en 56 clips, uno por bloque de diálogo, numerados igual
que en PROMPTS_POR_CLIP.md.

Uso:  python3 produccion/generar_clips.py   (después de generar_animatic.py)
Salida: salida/clips/clip_NN_escenaE_HABLANTE.mp4
"""
import os
import subprocess

from generar_animatic import SALIDA, TITULO_SEG
from linea_tiempo import linea_de_tiempo

PORTADA_SEG = 4.0


def main():
    mp4 = os.path.join(SALIDA, "animatic_frisby.mp4")
    destino = os.path.join(SALIDA, "clips")
    os.makedirs(destino, exist_ok=True)
    t = PORTADA_SEG
    escena_actual = None
    bloques = linea_de_tiempo()
    for n, b in enumerate(bloques, 1):
        if b["escena"] != escena_actual:
            escena_actual = b["escena"]
            t += TITULO_SEG
        dur = b["fin"] - b["inicio"]
        nombre = f"clip_{n:02}_escena{b['escena']}_{b['quien']}.mp4"
        subprocess.run([
            "ffmpeg", "-y", "-loglevel", "error", "-ss", f"{t:.2f}", "-i", mp4, "-t", f"{dur:.2f}",
            "-c:v", "libx264", "-preset", "medium", "-crf", "20", "-tune", "stillimage",
            "-c:a", "aac", "-movflags", "+faststart", os.path.join(destino, nombre),
        ], check=True)
        t += dur
    print(f"OK: {len(bloques)} clips en {destino}")


if __name__ == "__main__":
    main()
