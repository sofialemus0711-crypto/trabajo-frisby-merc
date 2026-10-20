"""Genera PROMPTS_HISTORIA.md: los clips narrativos para la herramienta de video
con IA, con los personajes y el estilo de la apertura fotorrealista.

Uso:  python3 produccion/generar_prompts_historia.py
"""
import os

from historia_ia import ACCIONES, ESCENARIO, ESTILO, NEGATIVOS, PERSONAJES, SIN_DIALOGO
from linea_tiempo import linea_de_tiempo

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
NOMBRE = {"C1": "Compañera 1", "C2": "Compañera 2", "C3": "Compañera 3"}


def bloque_prompt(L, clave, ref, plano, accion, dur, quien=None, texto=None):
    L += [f"### Clip {clave} · ~{dur:.0f} s · referencia `referencia_ia/{ref}`", "", "```text",
          f"{ESTILO}. {ESCENARIO}.",
          f"Plano: {plano}. Acción: {accion}.",
          "Personajes idénticos a la referencia: " + "; ".join(PERSONAJES[c] for c in ("C1", "C2", "C3")) + "."]
    if "C4" in accion:
        L.append(PERSONAJES["C4"] + ".")
    if texto:
        if quien == "TODAS":
            L.append(f"C1, C2 y C3 dicen a la vez, en español latinoamericano, con naturalidad: «{texto}»")
        else:
            L.append(f"{NOMBRE[quien]} dice en español latinoamericano, con naturalidad y sincronía labial: «{texto}»")
        L.append("Solo mueve los labios quien habla; las demás escuchan y reaccionan.")
    else:
        L.append("Sin diálogo: solo acción, gestos y miradas.")
    L += [f"Evitar: {NEGATIVOS}.", "```", ""]


def main():
    L = ["# Frisby: El sabor de compartir — clips narrativos para IA", "",
         "Este es el paquete para convertir el video en una historia actuada, con el mismo estilo "
         "fotorrealista de la apertura (`referencia_ia/apertura_original.mp4`). Toda la historia "
         "ocurre en un restaurante Frisby: las tres amigas van a preparar su trabajo de mercadeo, "
         "lo viven ahí mismo y al final invitan a una cuarta amiga que llegó sola.", "",
         "## Cómo usarlo", "",
         "1. En tu herramienta de video (la que usaste para la apertura), usa **imagen a video** con "
         "la referencia que indica cada clip (`referencia_ia/ref_grupo_mesa.jpg` o "
         "`ref_presentadora.jpg`). Así se mantienen los mismos rostros y la misma ropa.",
         "2. Genera cada clip con su prompt y guárdalo en `clips_ia/` con el nombre indicado "
         "(`clip_01.mp4` … `clip_56.mp4`, más `clip_52_antes.mp4` para el momento sin diálogo).",
         "3. Si la herramienta genera voz, puede hablar el texto entre «». Si no, no importa: "
         "el montaje usa las voces ya grabadas de cada bloque.",
         "4. Ejecuta `python3 produccion/montar_historia.py` (o pídeme que lo haga). Une los clips "
         "en orden con voces, música y logo. Si falta algún clip, pone temporalmente ese pedazo "
         "del cortometraje animado para que el video siempre esté completo.", "",
         "## Personajes (de tu referencia)", ""]
    L += [f"- **{c}:** {d}" for c, d in PERSONAJES.items()]
    L.append("")
    escena = None
    for n, b in enumerate(linea_de_tiempo(), 1):
        if b["escena"] != escena:
            escena = b["escena"]
            L += [f"## Escena {escena}. {b['titulo']}", ""]
        if n in SIN_DIALOGO:
            ref, plano, dur, accion = SIN_DIALOGO[n]
            bloque_prompt(L, f"{n:02}_antes", ref, plano, accion, dur)
        ref, plano, accion = ACCIONES[n]
        bloque_prompt(L, f"{n:02}", ref, plano, accion, b["fin"] - b["inicio"], b["quien"], b["texto"])
    ruta = os.path.join(RAIZ, "PROMPTS_HISTORIA.md")
    with open(ruta, "w", encoding="utf-8") as fh:
        fh.write("\n".join(L))
    print(f"OK: {ruta}")


if __name__ == "__main__":
    main()
