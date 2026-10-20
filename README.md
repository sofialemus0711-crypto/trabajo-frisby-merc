# Frisby: El sabor de compartir

Material de producción del video para el trabajo de **Gestión de Mercadeo**, basado
literalmente en el guion de las ocho escenas (incluida la campaña **“Frisby nos une”**).

## Qué hay aquí

| Archivo | Para qué sirve |
|---|---|
| `salida/animatic_frisby.mp4` | Animatic 1920×1080 (≈ 5 min 38 s) **con voces y música de fondo**: las 8 escenas en orden, cada diálogo completo en pantalla con la compañera que lo dice, imágenes de apoyo, diagramas de los conceptos (sin cifras inventadas) y cierre con el logotipo oficial a pantalla completa. Sirve como guía de montaje y de tiempos, o como entrega si se le añaden las voces. |
| `salida/clips/` (y `salida/clips_frisby.zip`) | El animatic cortado en 56 clips con voz, uno por bloque de diálogo, numerados igual que en `PROMPTS_POR_CLIP.md` (`clip_NN_escenaE_HABLANTE.mp4`). |
| `salida/voces/` | Voz de cada bloque (`voz_NN.wav`), sintetizada con Kokoro: una voz distinta por compañera y las tres mezcladas en los eslóganes. |
| `salida/musica_fondo.m4a` | Pista instrumental original (compuesta por `produccion/generar_musica.py`, sin derechos de terceros), por si se quiere usar en otro montaje. En el animatic va por debajo de las voces y baja sola cuando alguien habla. |
| `salida/subtitulos_frisby.srt` | Subtítulos con los tiempos del animatic. Se importan en CapCut / DaVinci / Premiere. |
| `PROMPTS_POR_CLIP.md` | 56 prompts listos para herramientas de video con IA (Veo, Sora, Kling, Runway…), un clip de hasta ~9 s por bloque de diálogo literal, con ficha fija de las tres protagonistas para mantener la continuidad. |
| `produccion/guion_data.py` | **Fuente única del guion** (diálogos literales, ambientación, planos y apoyos visuales). |
| `produccion/generar_animatic.py` | Regenera el MP4 y el SRT. |
| `produccion/generar_prompts.py` | Regenera `PROMPTS_POR_CLIP.md`. |
| `assets/` | Imágenes de referencia de la marca (logo, mascota, local, uniformes, menú). |

## Importante: voces

Las voces son **sintéticas** (Kokoro, TTS local en español). Cada compañera tiene una voz
distinta (C1 cálida, C2 más aguda y rápida, C3 más grave y pausada), pero el acento es
español neutro, no colombiano, y no hay actrices en pantalla ni sincronización labial.
Para la versión final lo más natural es grabar ustedes mismas los diálogos con el celular
sobre estos mismos clips (las duraciones ya coinciden con cada frase), o generar los clips
con actrices usando `PROMPTS_POR_CLIP.md`.

En un montaje propio: usar `salida/musica_fondo.m4a` por debajo de las voces y el logotipo oficial
(`assets/logo_mascota.jpg`) al cierre, sin generar logotipos con IA.

## Regenerar

```bash
python3 produccion/generar_voces.py      # requiere kokoro-onnx y el modelo en produccion/modelos/
python3 produccion/generar_animatic.py   # requiere Pillow y ffmpeg
python3 produccion/generar_prompts.py
python3 produccion/generar_clips.py      # después del animatic
```

Los diálogos se escriben solo en `guion_data.py`; los dos generadores verifican que la
división en bloques no altere el texto.
