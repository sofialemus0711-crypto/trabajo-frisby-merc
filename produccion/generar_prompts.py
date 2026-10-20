"""Genera PROMPTS_POR_CLIP.md: un prompt por clip (≤ 8 s) para herramientas de
video con IA (Veo, Sora, Kling, Runway, etc.), con el diálogo literal.

Uso:  python3 produccion/generar_prompts.py
"""
import os

from guion_data import ESCENAS, PERSONAJES, TITULO
from linea_tiempo import linea_de_tiempo

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

ESTILO = (
    "Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y "
    "cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, "
    "movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional."
)
NEGATIVOS = (
    "Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin "
    "texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros "
    "deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que "
    "tape la voz."
)


def ficha(c):
    p = PERSONAJES[c]
    return f"{p['rol']}: {p['apariencia']}. Voz: {p['voz']}. Actitud: {p['actitud']}."


def quien_habla(q):
    if q == "TODAS":
        return ("Las tres juntas, mirando a cámara, dicen al unísono, coordinadas y "
                "perfectamente audibles")
    return f"{PERSONAJES[q]['rol']} dice a cámara, con sincronización labial exacta"


def main():
    bloques = linea_de_tiempo()
    escenas = {e["num"]: e for e in ESCENAS}
    L = [f"# {TITULO} — Prompts por clip para video con IA", ""]
    L += [
        "Generado automáticamente desde `produccion/guion_data.py`. Cada clip dura unos 8 "
        "segundos (máximo ~9) y contiene **un solo bloque de diálogo literal**: no se resume, no se "
        "cambia el orden y ningún texto se repite. Al unir los clips en orden se obtiene el "
        "guion completo de las ocho escenas.",
        "",
        "## Cómo usar este paquete",
        "",
        "1. Genera primero la **imagen de referencia de personajes** (abajo) y úsala como "
        "referencia en *todos* los clips (función *ingredients*, *character reference* o "
        "*image-to-video* de tu herramienta).",
        "2. Copia el prompt de cada clip tal cual. Si tu herramienta genera audio (Veo 3, "
        "Sora 2, Kling con lip-sync), el diálogo entre comillas es lo que debe pronunciarse.",
        "3. Si la herramienta no genera voz, graben ustedes mismas cada diálogo (es lo más "
        "natural) y sincronicen con la duración indicada; los subtítulos `salida/subtitulos_frisby.srt` "
        "sirven de guía de tiempos.",
        "4. Revisa cada clip: si cortó o cambió una palabra, regéneralo. No lo edites para "
        "\"que quepa\".",
        "5. Monta los clips en orden (CapCut, DaVinci Resolve, Premiere…), añade música "
        "instrumental suave por debajo de las voces e inserta el logotipo oficial al cierre.",
        "",
        "## Imagen de referencia de personajes",
        "",
        "```text",
        "Fotografía de referencia, plano general frontal sobre fondo neutro cálido, tres "
        "estudiantes universitarias colombianas juntas, de pie, sonriendo, iluminación suave de estudio:",
    ]
    for c in ("C1", "C2", "C3"):
        L.append(f"- {ficha(c)}")
    L += ["Sin logotipos ni texto. Estilo fotorrealista, 16:9.", "```", "",
          "## Estilo y negativos comunes (incluidos en cada prompt)", "",
          f"- **Estilo:** {ESTILO}", f"- **Evitar:** {NEGATIVOS}", ""]

    n = 0
    escena_actual = None
    for b in bloques:
        esc = escenas[b["escena"]]
        if b["escena"] != escena_actual:
            escena_actual = b["escena"]
            L += [f"## Escena {esc['num']}. {esc['titulo']}", "",
                  f"**Objetivo:** {esc['objetivo']}", "",
                  f"**Ambientación:** {esc['ambientacion']}", "", "**Planos previstos:**", ""]
            L += [f"- {p}" for p in esc["planos"]]
            L.append("")
        n += 1
        dur = b["fin"] - b["inicio"]
        presentes = ["C1", "C2", "C3"] if b["quien"] == "TODAS" or esc["num"] in (7, 8) else [b["quien"]]
        L += [f"### Clip {n:02} · Escena {esc['num']} · {PERSONAJES[b['quien']]['rol']} · ~{dur:.0f} s", ""]
        L += ["```text", ESTILO, "",
              f"Escena {esc['num']} ({esc['titulo']}). {esc['ambientacion']}",
              f"Acción y apoyo visual: {b['apoyo']}", "", "Personajes en cuadro (idénticos a la referencia):"]
        L += [f"- {ficha(c)}" for c in presentes]
        L += ["", f"{quien_habla(b['quien'])}:",
              f"«{b['texto']}»", "",
              ("Las tres mueven los labios a la vez." if b["quien"] == "TODAS" else
               "Solo mueve los labios quien habla.") + " Ritmo natural, sin acelerar; pausa breve al final.",
              f"Evitar: {NEGATIVOS}", "```", ""]

    L += ["## Lista de control antes de entregar", "",
          "- [ ] Están las ocho escenas en orden.",
          f"- [ ] Están los {n} clips y cada diálogo se oye completo y con la compañera correcta.",
          "- [ ] Escena 7: preparación de la mesa, reto en redes, cartel de presupuesto, medición sin cifras y eslogan conjunto.",
          "- [ ] Escena 8: tres frases individuales y el eslogan final literal.",
          "- [ ] Las tres protagonistas conservan rostro, peinado, vestuario y voz en todos los clips.",
          "- [ ] No hay logotipos falsos, cifras inventadas ni texto ilegible.",
          "- [ ] La música queda siempre por debajo de las voces.", ""]

    ruta = os.path.join(RAIZ, "PROMPTS_POR_CLIP.md")
    with open(ruta, "w", encoding="utf-8") as fh:
        fh.write("\n".join(L))
    print(f"OK: {ruta} ({n} clips)")


if __name__ == "__main__":
    main()
