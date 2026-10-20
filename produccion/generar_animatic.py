"""Genera el animatic (MP4 1920x1080) y los subtítulos (.srt) del guion.

Uso:  python3 produccion/generar_animatic.py
Salida: salida/animatic_frisby.mp4, salida/subtitulos_frisby.srt
Requiere: Pillow y ffmpeg.
"""
import os
import shutil
import subprocess
import textwrap

import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageFilter

from guion_data import ESCENAS, PERSONAJES, TITULO
from linea_tiempo import linea_de_tiempo

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SALIDA = os.path.join(RAIZ, "salida")
TMP = os.path.join(SALIDA, "_fotogramas")
W, H = 1920, 1080

AMARILLO = (247, 197, 30)
AMARILLO_CLARO = (255, 236, 160)
ROJO = (200, 16, 46)
VINO = (110, 15, 35)
NARANJA = (240, 110, 0)
BLANCO = (255, 255, 255)
GRIS = (90, 90, 90)

TITULO_SEG = 2.6     # tarjeta de título de cada escena
CIERRE_SEG = 4.0     # plano final sostenido

F = "/usr/share/fonts/truetype/liberation/"
def fuente(t, negrita=True):
    return ImageFont.truetype(F + ("LiberationSans-Bold.ttf" if negrita else "LiberationSans-Regular.ttf"), t)


# ---------------------------------------------------------------- utilidades
def lienzo():
    im = Image.new("RGB", (W, H), AMARILLO)
    d = ImageDraw.Draw(im)
    # franjas diagonales rojas/naranjas como en la imagen de uniformes
    d.polygon([(W - 520, 0), (W, 0), (W, 420)], fill=NARANJA)
    d.polygon([(W - 300, 0), (W, 0), (W, 240)], fill=ROJO)
    d.polygon([(0, H - 300), (0, H), (360, H)], fill=ROJO)
    return im, d


def centrado(d, cx, y, texto, f, color):
    w = d.textlength(texto, font=f)
    d.text((cx - w / 2, y), texto, font=f, fill=color)


def envolver(d, texto, f, ancho):
    lineas, actual = [], ""
    for p in texto.split():
        prueba = (actual + " " + p).strip()
        if d.textlength(prueba, font=f) <= ancho:
            actual = prueba
        else:
            lineas.append(actual)
            actual = p
    lineas.append(actual)
    return lineas


def pegar_imagen(im, ruta, caja, radio=36):
    x0, y0, x1, y1 = caja
    src = Image.open(os.path.join(RAIZ, ruta)).convert("RGB")
    esc = min((x1 - x0) / src.width, (y1 - y0) / src.height)
    nw, nh = int(src.width * esc), int(src.height * esc)
    src = src.resize((nw, nh), Image.LANCZOS)
    px, py = x0 + ((x1 - x0) - nw) // 2, y0 + ((y1 - y0) - nh) // 2
    sombra = Image.new("L", (nw + 60, nh + 60), 0)
    ImageDraw.Draw(sombra).rounded_rectangle((30, 30, nw + 30, nh + 30), radio, fill=110)
    sombra = sombra.filter(ImageFilter.GaussianBlur(14))
    im.paste((120, 70, 0), (px - 22, py - 14), sombra)
    mascara = Image.new("L", (nw, nh), 0)
    ImageDraw.Draw(mascara).rounded_rectangle((0, 0, nw, nh), radio, fill=255)
    im.paste(src, (px, py), mascara)
    return px, py, nw, nh


def tarjeta(d, caja, titulo, cuerpo="", activo=True, color=ROJO, icono=None):
    x0, y0, x1, y1 = caja
    d.rounded_rectangle(caja, 28, fill=BLANCO if activo else (250, 225, 150),
                        outline=color if activo else (220, 180, 80), width=6 if activo else 3)
    cx = (x0 + x1) / 2
    y = y0 + 26
    if icono:
        fi = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 60)
        centrado(d, cx, y, icono, fi, color if activo else GRIS)
        y += 82
    ft = fuente(38)
    for ln in envolver(d, titulo, ft, x1 - x0 - 40):
        centrado(d, cx, y, ln, ft, VINO if activo else GRIS)
        y += 46
    if cuerpo:
        y += 8
        fc = fuente(28, False)
        for ln in envolver(d, cuerpo, fc, x1 - x0 - 50):
            centrado(d, cx, y, ln, fc, (60, 60, 60) if activo else GRIS)
            y += 36


def flecha(d, a, b, color=VINO, grosor=10):
    d.line([a, b], fill=color, width=grosor)
    import math
    ang = math.atan2(b[1] - a[1], b[0] - a[0])
    for s in (2.6, -2.6):
        d.line([b, (b[0] + 34 * math.cos(ang + s), b[1] + 34 * math.sin(ang + s))], fill=color, width=grosor)


# ---------------------------------------------------------------- diagramas
ZONA = (120, 150, 1800, 790)


def diagrama(im, d, nombre, resaltar):
    x0, y0, x1, y1 = ZONA
    if nombre == "agenda":
        items = [("1", "Cómo se promociona"), ("2", "Cómo llega a sus clientes"), ("3", "Nuestra nueva campaña")]
        for i, (n, t) in enumerate(items):
            bx = x0 + 40 + i * 560
            tarjeta(d, (bx, y0 + 140, bx + 500, y0 + 460), t, activo=True, icono=n)
    elif nombre == "mezcla":
        items = [("Publicidad", "Redes sociales, videos e imágenes", "▶"),
                 ("Promociones de ventas", "Combos y descuentos de temporada", "%"),
                 ("Relaciones públicas", "Imagen y relación con la comunidad", "♥"),
                 ("Marketing directo", "Página web y comunicaciones", "✉")]
        for i, (t, c, ic) in enumerate(items):
            bx = x0 + 10 + i * 420
            act = resaltar == "todas" or resaltar == i
            tarjeta(d, (bx, y0 + 90, bx + 390, y0 + 500), t, c, activo=act, icono=ic)
        if resaltar == "todas":
            centrado(d, W / 2, y0 + 540, "Informar · Despertar interés · Incentivar la compra · Fortalecer la relación",
                     fuente(34), VINO)
    elif nombre == "estrategias":
        # atracción (pull) y empuje (push)
        f = fuente(40)
        act0, act1 = resaltar == 0, resaltar == 1
        tarjeta(d, (x0 + 20, y0 + 20, x0 + 800, y0 + 600), "Estrategia de atracción",
                "Publicidad y redes sociales despiertan el interés del consumidor, que busca el producto.",
                activo=act0)
        tarjeta(d, (x1 - 800, y0 + 20, x1 - 20, y0 + 600), "Estrategia de empuje",
                "Se incentiva a puntos de venta e intermediarios para que impulsen los productos.",
                activo=act1)
        c0 = ROJO if act0 else GRIS
        d.text((x0 + 110, y0 + 330), "Marca", font=f, fill=c0)
        flecha(d, (x0 + 560, y0 + 355), (x0 + 270, y0 + 355), c0)
        d.text((x0 + 580, y0 + 330), "Cliente", font=f, fill=c0)
        c1 = ROJO if act1 else GRIS
        bx = x1 - 790
        d.text((bx + 20, y0 + 330), "Marca", font=fuente(34), fill=c1)
        flecha(d, (bx + 140, y0 + 352), (bx + 230, y0 + 352), c1, 8)
        d.text((bx + 245, y0 + 330), "Punto de venta", font=fuente(34), fill=c1)
        flecha(d, (bx + 505, y0 + 352), (bx + 595, y0 + 352), c1, 8)
        d.text((bx + 610, y0 + 330), "Cliente", font=fuente(34), fill=c1)
    elif nombre == "presupuesto":
        centrado(d, W / 2, y0 + 10, "Presupuesto por objetivos y tareas", fuente(54), VINO)
        pasos = [("1", "Objetivos", "¿Qué queremos lograr?"),
                 ("2", "Actividades", "¿Qué tareas son necesarias?"),
                 ("3", "Costos", "¿Cuánto costaría cada una?")]
        for i, (n, t, c) in enumerate(pasos):
            bx = x0 + 60 + i * 560
            tarjeta(d, (bx, y0 + 130, bx + 440, y0 + 520), t, c, icono=n)
            if i < 2:
                flecha(d, (bx + 455, y0 + 325), (bx + 545, y0 + 325))
    elif nombre == "influenciadores":
        tarjeta(d, (x0 + 60, y0 + 40, x0 + 560, y0 + 560), "Creadores de contenido gastronómico",
                "Prueban los productos y comparten su experiencia", icono="★")
        flecha(d, (x0 + 590, y0 + 300), (x0 + 690, y0 + 300))
        tarjeta(d, (x0 + 720, y0 + 40, x0 + 1100, y0 + 560), "Videos cortos",
                "Recomendaciones auténticas en redes sociales", icono="▶")
        flecha(d, (x0 + 1130, y0 + 300), (x0 + 1230, y0 + 300))
        tarjeta(d, (x0 + 1260, y0 + 40, x1 - 40, y0 + 560), "Nuevos clientes",
                "Más reconocimiento de la marca", icono="↑")
    elif nombre == "canales":
        act0, act1 = resaltar == 0, resaltar == 1
        tarjeta(d, (x0 + 20, y0 + 20, x0 + 800, y0 + 600), "Canal directo",
                "Restaurantes, página web o aplicación de la marca", activo=act0)
        tarjeta(d, (x1 - 800, y0 + 20, x1 - 20, y0 + 600), "Canal indirecto",
                "Intervienen terceros, como las plataformas de domicilios", activo=act1)
        f = fuente(36)
        c0 = ROJO if act0 else GRIS
        d.text((x0 + 120, y0 + 380), "Frisby", font=f, fill=c0)
        flecha(d, (x0 + 260, y0 + 400), (x0 + 520, y0 + 400), c0)
        d.text((x0 + 540, y0 + 380), "Cliente", font=f, fill=c0)
        c1 = ROJO if act1 else GRIS
        bx = x1 - 790
        d.text((bx + 30, y0 + 380), "Frisby", font=f, fill=c1)
        flecha(d, (bx + 150, y0 + 400), (bx + 220, y0 + 400), c1, 8)
        d.text((bx + 235, y0 + 380), "Plataforma", font=f, fill=c1)
        flecha(d, (bx + 440, y0 + 400), (bx + 510, y0 + 400), c1, 8)
        d.text((bx + 530, y0 + 380), "Cliente", font=f, fill=c1)
    elif nombre == "cobertura":
        tipos = [("Intensiva", "Llegar a muchos consumidores", 14),
                 ("Selectiva", "Puntos elegidos estratégicamente", 5),
                 ("Exclusiva", "Determinados establecimientos", 1)]
        for i, (t, c, n) in enumerate(tipos):
            bx = x0 + 30 + i * 560
            act = resaltar is None or (resaltar == "propuesta" and i == 0)
            tarjeta(d, (bx, y0 + 20, bx + 500, y0 + 560), t, c, activo=act)
            col = ROJO if act else GRIS
            pos = [(bx + 80 + (k % 5) * 85, y0 + 330 + (k // 5) * 70) for k in range(15)]
            if n == 1:
                pos = [(bx + 250, y0 + 400)]
            elif n == 5:
                pos = [pos[0], pos[4], pos[7], pos[10], pos[14]]
            for px, py in pos[:n]:
                d.ellipse((px - 20, py - 20, px + 20, py + 20), fill=col)
        if resaltar == "propuesta":
            centrado(d, W / 2, y0 + 590, "Propuesta para Frisby: cobertura amplia, según la disponibilidad de restaurantes y domicilios",
                     fuente(32), VINO)
    elif nombre == "administracion":
        items = ["Aliados confiables", "Territorios de venta", "Precios, cobros y pagos",
                 "Inventarios", "Tiempos de entrega", "Satisfacción del cliente"]
        iconos = ["1", "2", "3", "4", "5", "6"]
        for i, t in enumerate(items):
            col, fila = i % 3, i // 3
            bx = x0 + 40 + col * 560
            by = y0 + 20 + fila * 310
            tarjeta(d, (bx, by, bx + 500, by + 280), t, activo=i in resaltar, icono=iconos[i])
    elif nombre == "campana":
        d.rounded_rectangle((x0 + 260, y0 + 60, x1 - 260, y0 + 560), 50, fill=ROJO)
        centrado(d, W / 2, y0 + 120, "Nuestra propuesta", fuente(44), AMARILLO_CLARO)
        centrado(d, W / 2, y0 + 200, "Frisby nos une", fuente(130), BLANCO)
        centrado(d, W / 2, y0 + 380, "Jóvenes · Amigos · Familias", fuente(48), AMARILLO)
        centrado(d, W / 2, y0 + 460, "Compartir risas, historias y momentos inolvidables", fuente(34, False), BLANCO)
    elif nombre == "reto":
        items = [("Videos creativos", "Divertidos, en redes sociales", "▶"),
                 ("Fotografías", "De nuestros combos favoritos", "◉"),
                 ("#FrisbyNosUne", "Reto: comparte tus mejores momentos", "★")]
        for i, (t, c, ic) in enumerate(items):
            bx = x0 + 40 + i * 560
            tarjeta(d, (bx, y0 + 60, bx + 500, y0 + 520), t, c, icono=ic)
    elif nombre == "presupuesto_campana":
        centrado(d, W / 2, y0 + 10, "¿En qué invertiríamos?", fuente(54), VINO)
        items = [("Creación de contenido", "✎"), ("Publicidad en redes sociales", "▶"),
                 ("Materiales promocionales", "▤")]
        for i, (t, ic) in enumerate(items):
            bx = x0 + 60 + i * 560
            tarjeta(d, (bx, y0 + 130, bx + 440, y0 + 520), t, icono=ic)
    elif nombre == "medicion":
        centrado(d, W / 2, y0 + 10, "¿Cómo mediríamos los resultados?", fuente(54), VINO)
        items = [("Visualizaciones", "◉"), ("Compartidos", "↗"), ("Pedidos generados", "▣"),
                 ("Participación del público", "☺")]
        for i, (t, ic) in enumerate(items):
            bx = x0 + 10 + i * 420
            tarjeta(d, (bx, y0 + 130, bx + 390, y0 + 520), t, icono=ic)
    elif nombre == "eslogan_une":
        pegar_imagen(im, "assets/menu_pollo_apanado.jpg", (x0, y0 + 300, x1, y1))
        centrado(d, W / 2, y0 + 30, "¡Frisby nos une!", fuente(110), ROJO)
        centrado(d, W / 2, y0 + 170, "porque los mejores momentos saben mejor cuando se comparten",
                 fuente(44), VINO)
    elif nombre == "final":
        pegar_imagen(im, "assets/logo_mascota.jpg", (x0 + 560, y0, x1 - 560, y1))
    else:
        raise ValueError(nombre)


# ---------------------------------------------------------------- fotogramas
def cabecera(d, escena):
    txt = f"ESCENA {escena['num']} · {escena['titulo'].upper()}"
    f = fuente(34)
    w = d.textlength(txt, font=f)
    d.rounded_rectangle((60, 46, 60 + w + 56, 110), 32, fill=VINO)
    d.text((88, 58), txt, font=f, fill=BLANCO)


def subtitulo(d, quien, texto):
    caja = (90, 815, W - 90, 1040)
    d.rounded_rectangle(caja, 30, fill=BLANCO)
    p = PERSONAJES[quien]
    etiqueta = p["rol"] if quien != "TODAS" else "Las tres juntas"
    fe = fuente(28)
    we = d.textlength(etiqueta, font=fe)
    d.rounded_rectangle((130, 790, 130 + we + 44, 842), 26, fill=p["color"])
    d.text((152, 798), etiqueta, font=fe, fill=BLANCO)
    ft = fuente(44)
    lineas = envolver(d, f"“{texto}”", ft, caja[2] - caja[0] - 100)
    if len(lineas) > 3:
        ft = fuente(38)
        lineas = envolver(d, f"“{texto}”", ft, caja[2] - caja[0] - 100)
    alto = len(lineas) * (ft.size + 10)
    y = (caja[1] + 20 + caja[3]) / 2 - alto / 2
    for ln in lineas:
        centrado(d, W / 2, y, ln, ft, (30, 30, 30))
        y += ft.size + 10


def fotograma_bloque(b, escena):
    im, d = lienzo()
    cabecera(d, escena)
    tipo = b["visual"][0]
    if tipo == "imagen":
        _, ruta, pie = b["visual"]
        pegar_imagen(im, ruta, (ZONA[0], ZONA[1] + 10, ZONA[2], ZONA[3] - (60 if pie else 0)))
        if pie:
            centrado(d, W / 2, ZONA[3] - 50, pie, fuente(40), VINO)
    else:
        _, nombre, resaltar = b["visual"]
        diagrama(im, d, nombre, resaltar)
    subtitulo(d, b["quien"], b["texto"])
    return im


def fotograma_titulo(escena):
    im, d = lienzo()
    d.rounded_rectangle((260, 300, W - 260, 780), 60, fill=ROJO)
    centrado(d, W / 2, 360, f"ESCENA {escena['num']}", fuente(60), AMARILLO)
    ft = fuente(84)
    y = 470
    for ln in envolver(d, escena["titulo"], ft, W - 640):
        centrado(d, W / 2, y, ln, ft, BLANCO)
        y += 100
    return im


def fotograma_portada():
    im, d = lienzo()
    pegar_imagen(im, "assets/mascota.jpg", (160, 200, 760, 880), radio=300)
    d.text((840, 330), "Frisby:", font=fuente(130), fill=ROJO)
    d.text((840, 480), "El sabor de", font=fuente(110), fill=VINO)
    d.text((840, 610), "compartir", font=fuente(110), fill=VINO)
    d.text((844, 790), "Gestión de Mercadeo · Animatic de producción", font=fuente(36, False), fill=VINO)
    return im


def fotograma_cierre():
    im, d = lienzo()
    pegar_imagen(im, "assets/logo_mascota.jpg", (660, 120, 1260, 720))
    centrado(d, W / 2, 790, "¡Frisby, mucho más que pollo… ¡momentos para compartir!", fuente(56), ROJO)
    centrado(d, W / 2, 880, "Frisby nos une", fuente(44), VINO)
    return im


# ---------------------------------------------------------------- salida
def tiempo_srt(s):
    ms = int(round(s * 1000))
    h, ms = divmod(ms, 3600000)
    m, ms = divmod(ms, 60000)
    s, ms = divmod(ms, 1000)
    return f"{h:02}:{m:02}:{s:02},{ms:03}"


def main():
    os.makedirs(TMP, exist_ok=True)
    escenas = {e["num"]: e for e in ESCENAS}
    bloques = linea_de_tiempo()

    secuencia = []  # (ruta_png, duracion)
    srt = []
    voces_dir = os.path.join(SALIDA, "voces")
    con_voz = os.path.exists(os.path.join(voces_dir, "duraciones.json"))
    pistas = []  # (inicio_s, ruta_wav)

    def agregar(im, dur):
        ruta = os.path.join(TMP, f"{len(secuencia):03}.png")
        im.save(ruta)
        secuencia.append((ruta, dur))

    t = 0.0
    agregar(fotograma_portada(), 4.0)
    t += 4.0
    escena_actual = None
    for b in bloques:
        if b["escena"] != escena_actual:
            escena_actual = b["escena"]
            agregar(fotograma_titulo(escenas[escena_actual]), TITULO_SEG)
            t += TITULO_SEG
        dur = round(b["fin"] - b["inicio"], 2)
        agregar(fotograma_bloque(b, escenas[b["escena"]]), dur)
        if con_voz:
            pistas.append((t, os.path.join(voces_dir, f"voz_{len(srt) + 1:02}.wav")))
        rol = PERSONAJES[b["quien"]]["rol"]
        srt.append(f"{len(srt) + 1}\n{tiempo_srt(t)} --> {tiempo_srt(t + dur - 0.25)}\n"
                   f"[{rol}]\n" + "\n".join(textwrap.wrap(b["texto"], 52)) + "\n")
        t += dur
    agregar(fotograma_cierre(), CIERRE_SEG)
    t += CIERRE_SEG

    with open(os.path.join(SALIDA, "subtitulos_frisby.srt"), "w", encoding="utf-8") as fh:
        fh.write("\n".join(srt))

    lista = os.path.join(TMP, "lista.txt")
    with open(lista, "w") as fh:
        for ruta, dur in secuencia:
            fh.write(f"file '{ruta}'\nduration {dur}\n")
        fh.write(f"file '{secuencia[-1][0]}'\n")  # requisito del demuxer concat

    if con_voz:
        import soundfile as sf
        sr = sf.info(pistas[0][1]).samplerate
        mezcla = np.zeros(int((t + 1) * sr), dtype=np.float32)
        for inicio, ruta in pistas:
            a, _ = sf.read(ruta, dtype="float32")
            i = int(inicio * sr)
            mezcla[i:i + len(a)] += a
        audio = os.path.join(TMP, "voces.wav")
        sf.write(audio, mezcla, sr)
        entrada_audio = ["-i", audio]
    else:
        entrada_audio = ["-f", "lavfi", "-i", "anullsrc=r=48000:cl=stereo"]

    mp4 = os.path.join(SALIDA, "animatic_frisby.mp4")
    subprocess.run([
        "ffmpeg", "-y", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", lista,
        *entrada_audio, "-t", f"{t:.2f}", "-ar", "48000", "-ac", "2",
        "-vf", "fps=25,format=yuv420p", "-c:v", "libx264", "-preset", "medium", "-crf", "20",
        "-tune", "stillimage", "-c:a", "aac", "-b:a", "160k", "-movflags", "+faststart", mp4,
    ], check=True)
    shutil.rmtree(TMP)
    print(f"OK: {mp4} ({t:.1f} s, {len(bloques)} bloques de diálogo)")


if __name__ == "__main__":
    main()
