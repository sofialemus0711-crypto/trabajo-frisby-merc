"""Compone una pista instrumental original, alegre y discreta, para el fondo.

Groove suave de inspiración tropical/cumbia pop a 96 BPM en Sol mayor
(Sol – Re – Mim – Do): pad cálido, marimba, bajo, shaker y bombo suave.
Al ser sintetizada aquí mismo, no tiene derechos de autor de terceros.

generar_animatic.py la crea con la duración exacta del video y la mezcla
por debajo de las voces. Para obtener solo la pista:
  python3 produccion/generar_musica.py [duracion_s]  -> salida/musica_fondo.wav
"""
import os
import sys

import numpy as np
import soundfile as sf

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SR = 48000
BPM = 96
BEAT = 60 / BPM
COMPAS = 4 * BEAT

# acordes (MIDI): Sol, Re, Mim, Do
ACORDES = [[55, 59, 62], [50, 54, 57], [52, 55, 59], [48, 52, 55]]
BAJOS = [43, 38, 40, 36]
rng = np.random.default_rng(7)


def hz(m):
    return 440 * 2 ** ((m - 69) / 12)


def env(n, ataque, caida):
    t = np.arange(n) / SR
    return np.minimum(1, t / max(ataque, 1e-4)) * np.exp(-t / caida)


def colocar(pista, inicio, sonido, pan=0.0):
    i = int(inicio * SR)
    if i >= pista.shape[0]:
        return
    s = sonido[: pista.shape[0] - i]
    pista[i:i + len(s), 0] += s * (1 - pan) / 2 * 2 ** 0.5
    pista[i:i + len(s), 1] += s * (1 + pan) / 2 * 2 ** 0.5


def marimba(m, dur=0.6):
    n = int(dur * SR)
    t = np.arange(n) / SR
    f = hz(m)
    return (np.sin(2 * np.pi * f * t) * env(n, 0.002, 0.25)
            + 0.25 * np.sin(2 * np.pi * 4 * f * t) * env(n, 0.001, 0.05))


def pad(notas, dur):
    n = int(dur * SR)
    t = np.arange(n) / SR
    s = np.zeros(n)
    for m in notas:
        for det in (-0.08, 0.0, 0.08):
            f = hz(m + 12) * 2 ** (det / 12)
            s += np.sin(2 * np.pi * f * t) + 0.3 * np.sin(4 * np.pi * f * t)
    forma = np.minimum(1, t / 0.6) * np.minimum(1, (dur - t) / 0.6)
    return s * forma / 9


def bajo(m, dur):
    n = int(dur * SR)
    t = np.arange(n) / SR
    f = hz(m)
    return np.tanh(1.5 * np.sin(2 * np.pi * f * t)) * env(n, 0.005, 0.35)


def bombo():
    n = int(0.35 * SR)
    t = np.arange(n) / SR
    f = 50 + 70 * np.exp(-t / 0.04)
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * env(n, 0.001, 0.12)


def shaker(fuerte):
    n = int(0.09 * SR)
    ruido = rng.standard_normal(n)
    ruido = np.diff(ruido, prepend=0)  # agudos
    return ruido * env(n, 0.004, 0.025) * (0.5 if fuerte else 0.28)


def componer(duracion):
    pista = np.zeros((int((duracion + 2) * SR), 2))
    compases = int(np.ceil(duracion / COMPAS))
    patrones = [[0, 1, 2, 1], [0, 2, 1, 2], [2, 1, 0, 1]]
    for c in range(compases):
        t0 = c * COMPAS
        i = c % 4
        acorde, raiz = ACORDES[i], BAJOS[i]
        colocar(pista, t0, 0.22 * pad(acorde, COMPAS))
        con_ritmo = c >= 2  # introducción de dos compases solo con pad y marimba
        # marimba: corcheas en arpegio, el patrón cambia cada 8 compases
        pat = patrones[(c // 8) % len(patrones)]
        for k in range(8):
            if k in (3, 7) and c % 2:   # respiración
                continue
            nota = acorde[pat[k % 4]] + (12 if k >= 4 else 0)
            colocar(pista, t0 + k * BEAT / 2, 0.20 * marimba(nota), pan=-0.3 + 0.6 * (k % 2))
        if not con_ritmo:
            continue
        # bajo estilo cumbia: tónica en 1, quinta en 3
        colocar(pista, t0, 0.28 * bajo(raiz, BEAT * 1.5))
        colocar(pista, t0 + 2 * BEAT, 0.24 * bajo(raiz + 7, BEAT * 1.5))
        for b in range(4):
            colocar(pista, t0 + b * BEAT, 0.30 * bombo())
            for s in range(4):  # semicorcheas de shaker, acento en el contratiempo
                colocar(pista, t0 + b * BEAT + s * BEAT / 4, 0.12 * shaker(s == 2), pan=0.35)
    pista = pista[: int(duracion * SR)]
    # entrada y salida suaves
    n = pista.shape[0]
    fade = np.ones(n)
    fi, fo = int(1.5 * SR), int(5 * SR)
    fade[:fi] = np.linspace(0, 1, fi)
    fade[-fo:] = np.linspace(1, 0, fo)
    pista *= fade[:, None]
    return (pista / np.abs(pista).max() * 0.8).astype(np.float32)


def main():
    duracion = float(sys.argv[1]) if len(sys.argv) > 1 else 340
    ruta = os.path.join(RAIZ, "salida", "musica_fondo.wav")
    sf.write(ruta, componer(duracion), SR)
    print(f"OK: {ruta} ({duracion:.1f} s)")


if __name__ == "__main__":
    main()
