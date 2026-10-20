"""Divide los párrafos literales en bloques cortos (subtítulos / clips de IA).

Los cortes solo se hacen entre oraciones o en comas/puntos y comas: el texto
unido de nuevo es exactamente el párrafo original.
"""
import json
import os
import re

from guion_data import ESCENAS

DURACIONES_VOZ = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                              "salida", "voces", "duraciones.json")

PALABRAS_POR_SEGUNDO = 2.5   # ritmo natural de habla, sin acelerar
PAUSA = 0.7                  # pausa natural después de cada bloque
MAX_PALABRAS = 18            # ~7-8 s de habla: cabe en un clip de IA de 8 s


def _palabras(t):
    return len(t.split())


def _trocear(texto, separador):
    partes = re.split(separador, texto)
    return [p for p in partes if p.strip()]


def dividir(texto, max_palabras=MAX_PALABRAS):
    """Devuelve bloques que, concatenados con un espacio, reproducen el texto."""
    oraciones = _trocear(texto, r"(?<=[.!?…])\s+(?=[¿¡A-ZÁÉÍÓÚÑ])")
    piezas = []
    for o in oraciones:
        if _palabras(o) <= max_palabras:
            piezas.append(o)
            continue
        # oración larga: cortar en comas / punto y coma / dos puntos
        sub = _trocear(o, r"(?<=[,;:])\s+")
        actual = ""
        for s in sub:
            candidato = (actual + " " + s).strip()
            if actual and _palabras(candidato) > max_palabras:
                piezas.append(actual)
                actual = s
            else:
                actual = candidato
        if actual:
            piezas.append(actual)
    # unir piezas consecutivas cortas mientras quepan
    bloques = []
    for p in piezas:
        if bloques and _palabras(bloques[-1] + " " + p) <= max_palabras:
            bloques[-1] = bloques[-1] + " " + p
        else:
            bloques.append(p)
    assert " ".join(bloques) == texto, "la división alteró el texto"
    return bloques


def duracion(texto):
    return round(max(2.2, _palabras(texto) / PALABRAS_POR_SEGUNDO) + PAUSA, 2)


def linea_de_tiempo(usar_voces=True):
    """Lista de bloques con escena, hablante, texto, visual, apoyo, inicio y fin.

    Si existen voces generadas (generar_voces.py), cada bloque dura lo que dura
    su voz más la pausa; si no, se estima por número de palabras.
    """
    voces = {}
    if usar_voces and os.path.exists(DURACIONES_VOZ):
        with open(DURACIONES_VOZ) as fh:
            voces = json.load(fh)
    t = 0.0
    bloques = []
    for esc in ESCENAS:
        for i_par, (quien, texto, visual, apoyo) in enumerate(esc["parrafos"]):
            partes = dividir(texto)
            for i, parte in enumerate(partes):
                n = len(bloques) + 1
                d = round(voces[str(n)] + PAUSA, 2) if voces else duracion(parte)
                bloques.append({
                    "escena": esc["num"], "titulo": esc["titulo"], "parrafo": i_par,
                    "quien": quien, "texto": parte, "visual": visual, "apoyo": apoyo,
                    "parte": i, "partes": len(partes), "inicio": t, "fin": t + d,
                })
                t += d
    return bloques


if __name__ == "__main__":
    for b in linea_de_tiempo():
        print(f'{b["escena"]} {b["quien"]:5} {b["fin"]-b["inicio"]:5.1f}s  {b["texto"]}')
