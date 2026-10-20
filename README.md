# Frisby: El sabor de compartir

Material de producción del video para el trabajo de **Gestión de Mercadeo**, basado
literalmente en el guion de las ocho escenas (incluida la campaña **“Frisby nos une”**).

## Qué hay aquí

| Archivo | Para qué sirve |
|---|---|
| `salida/animatic_frisby.mp4` | Animatic 1920×1080 (≈ 5 min 48 s): las 8 escenas en orden, cada diálogo completo en pantalla con la compañera que lo dice, imágenes de apoyo y diagramas de los conceptos (sin cifras inventadas). Sirve como guía de montaje y de tiempos, o como entrega si se le añaden las voces. |
| `salida/clips/` (y `salida/clips_frisby.zip`) | El animatic cortado en 56 clips, uno por bloque de diálogo, numerados igual que en `PROMPTS_POR_CLIP.md` (`clip_NN_escenaE_HABLANTE.mp4`). |
| `salida/subtitulos_frisby.srt` | Subtítulos con los tiempos del animatic. Se importan en CapCut / DaVinci / Premiere. |
| `PROMPTS_POR_CLIP.md` | 56 prompts listos para herramientas de video con IA (Veo, Sora, Kling, Runway…), un clip de hasta ~9 s por bloque de diálogo literal, con ficha fija de las tres protagonistas para mantener la continuidad. |
| `produccion/guion_data.py` | **Fuente única del guion** (diálogos literales, ambientación, planos y apoyos visuales). |
| `produccion/generar_animatic.py` | Regenera el MP4 y el SRT. |
| `produccion/generar_prompts.py` | Regenera `PROMPTS_POR_CLIP.md`. |
| `assets/` | Imágenes de referencia de la marca (logo, mascota, local, uniformes, menú). |

## Importante: voces y actrices

El animatic **no tiene voces**: hay que grabarlas. Opciones:

1. **Grabar ustedes mismas** cada diálogo con el celular, siguiendo los tiempos del `.srt`, y
   montarlo sobre el animatic o sobre sus propias tomas (es lo más natural y lo más fiel al guion).
2. **Generar los clips con IA** usando `PROMPTS_POR_CLIP.md`: primero la imagen de referencia
   de personajes, luego los 56 clips en orden; regenerar cualquier clip que cambie o corte
   una palabra.

En el montaje final: música instrumental suave por debajo de las voces y el logotipo oficial
(`assets/logo_mascota.jpg`) al cierre, sin generar logotipos con IA.

## Regenerar

```bash
python3 produccion/generar_animatic.py   # requiere Pillow y ffmpeg
python3 produccion/generar_prompts.py
python3 produccion/generar_clips.py      # después del animatic
```

Los diálogos se escriben solo en `guion_data.py`; los dos generadores verifican que la
división en bloques no altere el texto.
