# Frisby: El sabor de compartir — Prompts por clip para video con IA

Generado automáticamente desde `produccion/guion_data.py`. Cada clip dura unos 8 segundos (máximo ~9) y contiene **un solo bloque de diálogo literal**: no se resume, no se cambia el orden y ningún texto se repite. Al unir los clips en orden se obtiene el guion completo de las ocho escenas.

## Cómo usar este paquete

1. Genera primero la **imagen de referencia de personajes** (abajo) y úsala como referencia en *todos* los clips (función *ingredients*, *character reference* o *image-to-video* de tu herramienta).
2. Copia el prompt de cada clip tal cual. Si tu herramienta genera audio (Veo 3, Sora 2, Kling con lip-sync), el diálogo entre comillas es lo que debe pronunciarse.
3. Si la herramienta no genera voz, graben ustedes mismas cada diálogo (es lo más natural) y sincronicen con la duración indicada; los subtítulos `salida/subtitulos_frisby.srt` sirven de guía de tiempos.
4. Revisa cada clip: si cortó o cambió una palabra, regéneralo. No lo edites para "que quepa".
5. Monta los clips en orden (CapCut, DaVinci Resolve, Premiere…), añade música instrumental suave por debajo de las voces e inserta el logotipo oficial al cierre.

## Imagen de referencia de personajes

```text
Fotografía de referencia, plano general frontal sobre fondo neutro cálido, tres estudiantes universitarias colombianas juntas, de pie, sonriendo, iluminación suave de estudio:
- Compañera 1 – Presentadora: mujer colombiana de unos 21 años, piel trigueña clara, cabello castaño oscuro, largo, liso y suelto con raya al lado; blusa blanca de botones y chaqueta roja ligera; pequeños aretes dorados; sonrisa amplia. Voz: voz femenina media, cálida, segura y expresiva, acento colombiano (Bogotá) natural. Actitud: segura, expresiva, amigable y profesional.
- Compañera 2 – Clienta y encargada de promociones: mujer colombiana de unos 20 años, piel morena clara, cabello castaño claro rizado recogido en cola alta; camiseta amarilla mostaza y jean azul claro; pulsera de colores en la muñeca derecha. Voz: voz femenina algo más aguda, enérgica y espontánea, acento colombiano (paisa suave) natural. Actitud: espontánea, cercana y entusiasta.
- Compañera 3 – Analista de marketing: mujer colombiana de unos 22 años, piel morena, cabello negro corto estilo bob a la altura de la mandíbula; gafas de montura delgada negra; blazer vino tinto sobre camiseta blanca. Voz: voz femenina media-grave, clara, pausada y académica, acento colombiano (Bogotá) natural. Actitud: clara, segura y académicamente convincente.
Sin logotipos ni texto. Estilo fotorrealista, 16:9.
```

## Estilo y negativos comunes (incluidos en cada prompt)

- **Estilo:** Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.
- **Evitar:** Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.

## Escena 1. Introducción

**Objetivo:** Presentar la marca Frisby y despertar el interés del espectador.

**Ambientación:** Espacio acogedor con una mesa preparada para compartir una comida. Pollo apanado dorado y crujiente con arepas, papas y gaseosas. Ambiente juvenil, luz cálida de tarde.

**Planos previstos:**

- Primer plano del pollo apanado y sus acompañamientos.
- Compañera 2 observa la comida y expresa antojo de forma espontánea.
- Compañera 1 presenta la marca directamente a cámara (plano medio).
- Insertos de una comida compartida entre amigos y familiares.
- Cierre con la presentadora mirando a cámara, preparando la transición.

### Clip 01 · Escena 1 · Compañera 2 – Clienta y encargada de promociones · ~8 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 1 (Introducción). Espacio acogedor con una mesa preparada para compartir una comida. Pollo apanado dorado y crujiente con arepas, papas y gaseosas. Ambiente juvenil, luz cálida de tarde.
Acción y apoyo visual: Primer plano del pollo apanado; la compañera 2 lo mira con antojo y sonríe.

Personajes en cuadro (idénticos a la referencia):
- Compañera 2 – Clienta y encargada de promociones: mujer colombiana de unos 20 años, piel morena clara, cabello castaño claro rizado recogido en cola alta; camiseta amarilla mostaza y jean azul claro; pulsera de colores en la muñeca derecha. Voz: voz femenina algo más aguda, enérgica y espontánea, acento colombiano (paisa suave) natural. Actitud: espontánea, cercana y entusiasta.

Compañera 2 – Clienta y encargada de promociones dice a cámara, con sincronización labial exacta:
«¡Uy, qué hambre! ¿A quién no se le antoja un pollo delicioso para compartir con sus amigas?»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 02 · Escena 1 · Compañera 1 – Presentadora · ~6 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 1 (Introducción). Espacio acogedor con una mesa preparada para compartir una comida. Pollo apanado dorado y crujiente con arepas, papas y gaseosas. Ambiente juvenil, luz cálida de tarde.
Acción y apoyo visual: La compañera 1 habla a cámara; insertos de amigos y familia compartiendo una comida.

Personajes en cuadro (idénticos a la referencia):
- Compañera 1 – Presentadora: mujer colombiana de unos 21 años, piel trigueña clara, cabello castaño oscuro, largo, liso y suelto con raya al lado; blusa blanca de botones y chaqueta roja ligera; pequeños aretes dorados; sonrisa amplia. Voz: voz femenina media, cálida, segura y expresiva, acento colombiano (Bogotá) natural. Actitud: segura, expresiva, amigable y profesional.

Compañera 1 – Presentadora dice a cámara, con sincronización labial exacta:
«Hay sabores que no solo quitan el hambre, sino que también crean momentos inolvidables.»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 03 · Escena 1 · Compañera 1 – Presentadora · ~7 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 1 (Introducción). Espacio acogedor con una mesa preparada para compartir una comida. Pollo apanado dorado y crujiente con arepas, papas y gaseosas. Ambiente juvenil, luz cálida de tarde.
Acción y apoyo visual: La compañera 1 habla a cámara; insertos de amigos y familia compartiendo una comida.

Personajes en cuadro (idénticos a la referencia):
- Compañera 1 – Presentadora: mujer colombiana de unos 21 años, piel trigueña clara, cabello castaño oscuro, largo, liso y suelto con raya al lado; blusa blanca de botones y chaqueta roja ligera; pequeños aretes dorados; sonrisa amplia. Voz: voz femenina media, cálida, segura y expresiva, acento colombiano (Bogotá) natural. Actitud: segura, expresiva, amigable y profesional.

Compañera 1 – Presentadora dice a cámara, con sincronización labial exacta:
«Y cuando pensamos en compartir algo delicioso, Frisby es una marca que muchos colombianos reconocen.»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 04 · Escena 1 · Compañera 1 – Presentadora · ~8 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 1 (Introducción). Espacio acogedor con una mesa preparada para compartir una comida. Pollo apanado dorado y crujiente con arepas, papas y gaseosas. Ambiente juvenil, luz cálida de tarde.
Acción y apoyo visual: Planos detalle de combos servidos en la mesa.

Personajes en cuadro (idénticos a la referencia):
- Compañera 1 – Presentadora: mujer colombiana de unos 21 años, piel trigueña clara, cabello castaño oscuro, largo, liso y suelto con raya al lado; blusa blanca de botones y chaqueta roja ligera; pequeños aretes dorados; sonrisa amplia. Voz: voz femenina media, cálida, segura y expresiva, acento colombiano (Bogotá) natural. Actitud: segura, expresiva, amigable y profesional.

Compañera 1 – Presentadora dice a cámara, con sincronización labial exacta:
«Su pollo apanado y sus diferentes combos que son perfectos para disfrutar con amigos y con familia.»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 05 · Escena 1 · Compañera 1 – Presentadora · ~4 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 1 (Introducción). Espacio acogedor con una mesa preparada para compartir una comida. Pollo apanado dorado y crujiente con arepas, papas y gaseosas. Ambiente juvenil, luz cálida de tarde.
Acción y apoyo visual: Plano medio de la compañera 1, gesto de intriga.

Personajes en cuadro (idénticos a la referencia):
- Compañera 1 – Presentadora: mujer colombiana de unos 21 años, piel trigueña clara, cabello castaño oscuro, largo, liso y suelto con raya al lado; blusa blanca de botones y chaqueta roja ligera; pequeños aretes dorados; sonrisa amplia. Voz: voz femenina media, cálida, segura y expresiva, acento colombiano (Bogotá) natural. Actitud: segura, expresiva, amigable y profesional.

Compañera 1 – Presentadora dice a cámara, con sincronización labial exacta:
«Pero ¿qué hay detrás de una marca tan reconocida?»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 06 · Escena 1 · Compañera 1 – Presentadora · ~3 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 1 (Introducción). Espacio acogedor con una mesa preparada para compartir una comida. Pollo apanado dorado y crujiente con arepas, papas y gaseosas. Ambiente juvenil, luz cálida de tarde.
Acción y apoyo visual: La compañera 1 mira a cámara; transición hacia la explicación del marketing.

Personajes en cuadro (idénticos a la referencia):
- Compañera 1 – Presentadora: mujer colombiana de unos 21 años, piel trigueña clara, cabello castaño oscuro, largo, liso y suelto con raya al lado; blusa blanca de botones y chaqueta roja ligera; pequeños aretes dorados; sonrisa amplia. Voz: voz femenina media, cálida, segura y expresiva, acento colombiano (Bogotá) natural. Actitud: segura, expresiva, amigable y profesional.

Compañera 1 – Presentadora dice a cámara, con sincronización labial exacta:
«Hoy te mostraremos cómo se promociona,»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 07 · Escena 1 · Compañera 1 – Presentadora · ~6 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 1 (Introducción). Espacio acogedor con una mesa preparada para compartir una comida. Pollo apanado dorado y crujiente con arepas, papas y gaseosas. Ambiente juvenil, luz cálida de tarde.
Acción y apoyo visual: La compañera 1 mira a cámara; transición hacia la explicación del marketing.

Personajes en cuadro (idénticos a la referencia):
- Compañera 1 – Presentadora: mujer colombiana de unos 21 años, piel trigueña clara, cabello castaño oscuro, largo, liso y suelto con raya al lado; blusa blanca de botones y chaqueta roja ligera; pequeños aretes dorados; sonrisa amplia. Voz: voz femenina media, cálida, segura y expresiva, acento colombiano (Bogotá) natural. Actitud: segura, expresiva, amigable y profesional.

Compañera 1 – Presentadora dice a cámara, con sincronización labial exacta:
«cómo llega a sus clientes y cómo crearíamos una nueva campaña para ella.»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

## Escena 2. Mezcla de promoción

**Objetivo:** Explicar las herramientas de promoción que puede utilizar Frisby.

**Ambientación:** Escenario moderno con una mesa, un teléfono móvil y recursos gráficos de publicidad, promociones, relaciones públicas y marketing directo.

**Planos previstos:**

- Compañera 1 explica la publicidad; ejemplos de publicaciones gastronómicas y videos.
- Compañera 2 explica promociones de ventas y relaciones públicas; combos ilustrativos y conexión con la comunidad.
- Compañera 3 explica el marketing directo; sitio web de pedidos y comunicaciones digitales genéricas.
- Compañera 1 concluye con la función de cada herramienta.
- Compañera 2, como clienta, toma el teléfono, revisa el menú, elige un combo y pide.

### Clip 08 · Escena 2 · Compañera 1 – Presentadora · ~6 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 2 (Mezcla de promoción). Escenario moderno con una mesa, un teléfono móvil y recursos gráficos de publicidad, promociones, relaciones públicas y marketing directo.
Acción y apoyo visual: Publicaciones gastronómicas genéricas en redes sociales, videos cortos de producto.

Personajes en cuadro (idénticos a la referencia):
- Compañera 1 – Presentadora: mujer colombiana de unos 21 años, piel trigueña clara, cabello castaño oscuro, largo, liso y suelto con raya al lado; blusa blanca de botones y chaqueta roja ligera; pequeños aretes dorados; sonrisa amplia. Voz: voz femenina media, cálida, segura y expresiva, acento colombiano (Bogotá) natural. Actitud: segura, expresiva, amigable y profesional.

Compañera 1 – Presentadora dice a cámara, con sincronización labial exacta:
«Para dar a conocer sus productos, Frisby puede utilizar diferentes herramientas de promoción.»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 09 · Escena 2 · Compañera 1 – Presentadora · ~5 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 2 (Mezcla de promoción). Escenario moderno con una mesa, un teléfono móvil y recursos gráficos de publicidad, promociones, relaciones públicas y marketing directo.
Acción y apoyo visual: Publicaciones gastronómicas genéricas en redes sociales, videos cortos de producto.

Personajes en cuadro (idénticos a la referencia):
- Compañera 1 – Presentadora: mujer colombiana de unos 21 años, piel trigueña clara, cabello castaño oscuro, largo, liso y suelto con raya al lado; blusa blanca de botones y chaqueta roja ligera; pequeños aretes dorados; sonrisa amplia. Voz: voz femenina media, cálida, segura y expresiva, acento colombiano (Bogotá) natural. Actitud: segura, expresiva, amigable y profesional.

Compañera 1 – Presentadora dice a cámara, con sincronización labial exacta:
«Una de ellas es la publicidad, mediante anuncios en redes sociales,»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 10 · Escena 2 · Compañera 1 – Presentadora · ~4 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 2 (Mezcla de promoción). Escenario moderno con una mesa, un teléfono móvil y recursos gráficos de publicidad, promociones, relaciones públicas y marketing directo.
Acción y apoyo visual: Publicaciones gastronómicas genéricas en redes sociales, videos cortos de producto.

Personajes en cuadro (idénticos a la referencia):
- Compañera 1 – Presentadora: mujer colombiana de unos 21 años, piel trigueña clara, cabello castaño oscuro, largo, liso y suelto con raya al lado; blusa blanca de botones y chaqueta roja ligera; pequeños aretes dorados; sonrisa amplia. Voz: voz femenina media, cálida, segura y expresiva, acento colombiano (Bogotá) natural. Actitud: segura, expresiva, amigable y profesional.

Compañera 1 – Presentadora dice a cámara, con sincronización labial exacta:
«videos e imágenes que despiertan el deseo de comprar.»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 11 · Escena 2 · Compañera 2 – Clienta y encargada de promociones · ~8 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 2 (Mezcla de promoción). Escenario moderno con una mesa, un teléfono móvil y recursos gráficos de publicidad, promociones, relaciones públicas y marketing directo.
Acción y apoyo visual: Combos promocionales ilustrativos (sin cifras inventadas).

Personajes en cuadro (idénticos a la referencia):
- Compañera 2 – Clienta y encargada de promociones: mujer colombiana de unos 20 años, piel morena clara, cabello castaño claro rizado recogido en cola alta; camiseta amarilla mostaza y jean azul claro; pulsera de colores en la muñeca derecha. Voz: voz femenina algo más aguda, enérgica y espontánea, acento colombiano (paisa suave) natural. Actitud: espontánea, cercana y entusiasta.

Compañera 2 – Clienta y encargada de promociones dice a cámara, con sincronización labial exacta:
«También están las promociones de ventas, como combos y descuentos durante determinadas temporadas, que incentivan la compra.»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 12 · Escena 2 · Compañera 2 – Clienta y encargada de promociones · ~3 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 2 (Mezcla de promoción). Escenario moderno con una mesa, un teléfono móvil y recursos gráficos de publicidad, promociones, relaciones públicas y marketing directo.
Acción y apoyo visual: Actividades de conexión con la comunidad (por ejemplo, una iniciativa solidaria).

Personajes en cuadro (idénticos a la referencia):
- Compañera 2 – Clienta y encargada de promociones: mujer colombiana de unos 20 años, piel morena clara, cabello castaño claro rizado recogido en cola alta; camiseta amarilla mostaza y jean azul claro; pulsera de colores en la muñeca derecha. Voz: voz femenina algo más aguda, enérgica y espontánea, acento colombiano (paisa suave) natural. Actitud: espontánea, cercana y entusiasta.

Compañera 2 – Clienta y encargada de promociones dice a cámara, con sincronización labial exacta:
«Otra herramienta son las relaciones públicas,»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 13 · Escena 2 · Compañera 2 – Clienta y encargada de promociones · ~7 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 2 (Mezcla de promoción). Escenario moderno con una mesa, un teléfono móvil y recursos gráficos de publicidad, promociones, relaciones públicas y marketing directo.
Acción y apoyo visual: Actividades de conexión con la comunidad (por ejemplo, una iniciativa solidaria).

Personajes en cuadro (idénticos a la referencia):
- Compañera 2 – Clienta y encargada de promociones: mujer colombiana de unos 20 años, piel morena clara, cabello castaño claro rizado recogido en cola alta; camiseta amarilla mostaza y jean azul claro; pulsera de colores en la muñeca derecha. Voz: voz femenina algo más aguda, enérgica y espontánea, acento colombiano (paisa suave) natural. Actitud: espontánea, cercana y entusiasta.

Compañera 2 – Clienta y encargada de promociones dice a cámara, con sincronización labial exacta:
«que ayudan a fortalecer la imagen de la empresa y su relación con la comunidad.»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 14 · Escena 2 · Compañera 3 – Analista de marketing · ~6 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 2 (Mezcla de promoción). Escenario moderno con una mesa, un teléfono móvil y recursos gráficos de publicidad, promociones, relaciones públicas y marketing directo.
Acción y apoyo visual: Sitio web de pedidos en un portátil y un correo promocional genérico en el móvil.

Personajes en cuadro (idénticos a la referencia):
- Compañera 3 – Analista de marketing: mujer colombiana de unos 22 años, piel morena, cabello negro corto estilo bob a la altura de la mandíbula; gafas de montura delgada negra; blazer vino tinto sobre camiseta blanca. Voz: voz femenina media-grave, clara, pausada y académica, acento colombiano (Bogotá) natural. Actitud: clara, segura y académicamente convincente.

Compañera 3 – Analista de marketing dice a cámara, con sincronización labial exacta:
«Además, el marketing directo permite comunicarse con los consumidores a través de canales digitales,»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 15 · Escena 2 · Compañera 3 – Analista de marketing · ~7 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 2 (Mezcla de promoción). Escenario moderno con una mesa, un teléfono móvil y recursos gráficos de publicidad, promociones, relaciones públicas y marketing directo.
Acción y apoyo visual: Sitio web de pedidos en un portátil y un correo promocional genérico en el móvil.

Personajes en cuadro (idénticos a la referencia):
- Compañera 3 – Analista de marketing: mujer colombiana de unos 22 años, piel morena, cabello negro corto estilo bob a la altura de la mandíbula; gafas de montura delgada negra; blazer vino tinto sobre camiseta blanca. Voz: voz femenina media-grave, clara, pausada y académica, acento colombiano (Bogotá) natural. Actitud: clara, segura y académicamente convincente.

Compañera 3 – Analista de marketing dice a cámara, con sincronización labial exacta:
«como su página web y sus comunicaciones promocionales, para dar a conocer productos y ofertas.»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 16 · Escena 2 · Compañera 1 – Presentadora · ~5 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 2 (Mezcla de promoción). Escenario moderno con una mesa, un teléfono móvil y recursos gráficos de publicidad, promociones, relaciones públicas y marketing directo.
Acción y apoyo visual: La compañera 1 asiente y enumera con los dedos.

Personajes en cuadro (idénticos a la referencia):
- Compañera 1 – Presentadora: mujer colombiana de unos 21 años, piel trigueña clara, cabello castaño oscuro, largo, liso y suelto con raya al lado; blusa blanca de botones y chaqueta roja ligera; pequeños aretes dorados; sonrisa amplia. Voz: voz femenina media, cálida, segura y expresiva, acento colombiano (Bogotá) natural. Actitud: segura, expresiva, amigable y profesional.

Compañera 1 – Presentadora dice a cámara, con sincronización labial exacta:
«¡Exactamente! Cada herramienta cumple una función: informar, despertar el interés,»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 17 · Escena 2 · Compañera 1 – Presentadora · ~5 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 2 (Mezcla de promoción). Escenario moderno con una mesa, un teléfono móvil y recursos gráficos de publicidad, promociones, relaciones públicas y marketing directo.
Acción y apoyo visual: La compañera 1 asiente y enumera con los dedos.

Personajes en cuadro (idénticos a la referencia):
- Compañera 1 – Presentadora: mujer colombiana de unos 21 años, piel trigueña clara, cabello castaño oscuro, largo, liso y suelto con raya al lado; blusa blanca de botones y chaqueta roja ligera; pequeños aretes dorados; sonrisa amplia. Voz: voz femenina media, cálida, segura y expresiva, acento colombiano (Bogotá) natural. Actitud: segura, expresiva, amigable y profesional.

Compañera 1 – Presentadora dice a cámara, con sincronización labial exacta:
«incentivar la compra y fortalecer la relación con los consumidores.»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 18 · Escena 2 · Compañera 2 – Clienta y encargada de promociones · ~7 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 2 (Mezcla de promoción). Escenario moderno con una mesa, un teléfono móvil y recursos gráficos de publicidad, promociones, relaciones públicas y marketing directo.
Acción y apoyo visual: La compañera 2, como clienta, desliza el menú en el teléfono, elige un combo y toca "pedir".

Personajes en cuadro (idénticos a la referencia):
- Compañera 2 – Clienta y encargada de promociones: mujer colombiana de unos 20 años, piel morena clara, cabello castaño claro rizado recogido en cola alta; camiseta amarilla mostaza y jean azul claro; pulsera de colores en la muñeca derecha. Voz: voz femenina algo más aguda, enérgica y espontánea, acento colombiano (paisa suave) natural. Actitud: espontánea, cercana y entusiasta.

Compañera 2 – Clienta y encargada de promociones dice a cámara, con sincronización labial exacta:
«¡Miren esto! Puedo revisar el menú, elegir mi combo y pedirlo sin salir de casa.»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 19 · Escena 2 · Compañera 2 – Clienta y encargada de promociones · ~3 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 2 (Mezcla de promoción). Escenario moderno con una mesa, un teléfono móvil y recursos gráficos de publicidad, promociones, relaciones públicas y marketing directo.
Acción y apoyo visual: La compañera 2, como clienta, desliza el menú en el teléfono, elige un combo y toca "pedir".

Personajes en cuadro (idénticos a la referencia):
- Compañera 2 – Clienta y encargada de promociones: mujer colombiana de unos 20 años, piel morena clara, cabello castaño claro rizado recogido en cola alta; camiseta amarilla mostaza y jean azul claro; pulsera de colores en la muñeca derecha. Voz: voz femenina algo más aguda, enérgica y espontánea, acento colombiano (paisa suave) natural. Actitud: espontánea, cercana y entusiasta.

Compañera 2 – Clienta y encargada de promociones dice a cámara, con sincronización labial exacta:
«¡Se me antojó comer en Frisby!»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

## Escena 3. Estrategias de promoción y presupuesto

**Objetivo:** Explicar la estrategia de atracción, la de empuje y el presupuesto por objetivos y tareas.

**Ambientación:** Espacio de presentación con mesa y un tablero o pantalla para conceptos de marketing.

**Planos previstos:**

- Compañera 3 en plano medio explica la estrategia de atracción.
- Consumidores que descubren productos en publicidad y redes sociales.
- Estrategia de empuje: punto de venta y personal organizando productos y promociones.
- Presupuesto: tablero con tres etapas (objetivos, actividades, costos) sin cifras.
- Cierre con la compañera 3 frente al tablero.

### Clip 20 · Escena 3 · Compañera 3 – Analista de marketing · ~6 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 3 (Estrategias de promoción y presupuesto). Espacio de presentación con mesa y un tablero o pantalla para conceptos de marketing.
Acción y apoyo visual: Consumidores descubriendo productos en el teléfono.

Personajes en cuadro (idénticos a la referencia):
- Compañera 3 – Analista de marketing: mujer colombiana de unos 22 años, piel morena, cabello negro corto estilo bob a la altura de la mandíbula; gafas de montura delgada negra; blazer vino tinto sobre camiseta blanca. Voz: voz femenina media-grave, clara, pausada y académica, acento colombiano (Bogotá) natural. Actitud: clara, segura y académicamente convincente.

Compañera 3 – Analista de marketing dice a cámara, con sincronización labial exacta:
«En cuanto a las estrategias de promoción, encontramos la estrategia de atracción,»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 21 · Escena 3 · Compañera 3 – Analista de marketing · ~6 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 3 (Estrategias de promoción y presupuesto). Espacio de presentación con mesa y un tablero o pantalla para conceptos de marketing.
Acción y apoyo visual: Consumidores descubriendo productos en el teléfono.

Personajes en cuadro (idénticos a la referencia):
- Compañera 3 – Analista de marketing: mujer colombiana de unos 22 años, piel morena, cabello negro corto estilo bob a la altura de la mandíbula; gafas de montura delgada negra; blazer vino tinto sobre camiseta blanca. Voz: voz femenina media-grave, clara, pausada y académica, acento colombiano (Bogotá) natural. Actitud: clara, segura y académicamente convincente.

Compañera 3 – Analista de marketing dice a cámara, con sincronización labial exacta:
«que busca despertar el interés del consumidor mediante publicidad y redes sociales.»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 22 · Escena 3 · Compañera 3 – Analista de marketing · ~3 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 3 (Estrategias de promoción y presupuesto). Espacio de presentación con mesa y un tablero o pantalla para conceptos de marketing.
Acción y apoyo visual: Punto de venta; personal organizando productos y material promocional.

Personajes en cuadro (idénticos a la referencia):
- Compañera 3 – Analista de marketing: mujer colombiana de unos 22 años, piel morena, cabello negro corto estilo bob a la altura de la mandíbula; gafas de montura delgada negra; blazer vino tinto sobre camiseta blanca. Voz: voz femenina media-grave, clara, pausada y académica, acento colombiano (Bogotá) natural. Actitud: clara, segura y académicamente convincente.

Compañera 3 – Analista de marketing dice a cámara, con sincronización labial exacta:
«También está la estrategia de empuje,»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 23 · Escena 3 · Compañera 3 – Analista de marketing · ~8 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 3 (Estrategias de promoción y presupuesto). Espacio de presentación con mesa y un tablero o pantalla para conceptos de marketing.
Acción y apoyo visual: Punto de venta; personal organizando productos y material promocional.

Personajes en cuadro (idénticos a la referencia):
- Compañera 3 – Analista de marketing: mujer colombiana de unos 22 años, piel morena, cabello negro corto estilo bob a la altura de la mandíbula; gafas de montura delgada negra; blazer vino tinto sobre camiseta blanca. Voz: voz femenina media-grave, clara, pausada y académica, acento colombiano (Bogotá) natural. Actitud: clara, segura y académicamente convincente.

Compañera 3 – Analista de marketing dice a cámara, con sincronización labial exacta:
«que busca incentivar a los puntos de venta y a los intermediarios para que impulsen los productos.»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 24 · Escena 3 · Compañera 3 – Analista de marketing · ~6 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 3 (Estrategias de promoción y presupuesto). Espacio de presentación con mesa y un tablero o pantalla para conceptos de marketing.
Acción y apoyo visual: La compañera 3 frente al tablero con las tres etapas.

Personajes en cuadro (idénticos a la referencia):
- Compañera 3 – Analista de marketing: mujer colombiana de unos 22 años, piel morena, cabello negro corto estilo bob a la altura de la mandíbula; gafas de montura delgada negra; blazer vino tinto sobre camiseta blanca. Voz: voz femenina media-grave, clara, pausada y académica, acento colombiano (Bogotá) natural. Actitud: clara, segura y académicamente convincente.

Compañera 3 – Analista de marketing dice a cámara, con sincronización labial exacta:
«Para nuestra campaña, utilizaríamos el método de presupuesto por objetivos y tareas.»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 25 · Escena 3 · Compañera 3 – Analista de marketing · ~7 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 3 (Estrategias de promoción y presupuesto). Espacio de presentación con mesa y un tablero o pantalla para conceptos de marketing.
Acción y apoyo visual: La compañera 3 frente al tablero con las tres etapas.

Personajes en cuadro (idénticos a la referencia):
- Compañera 3 – Analista de marketing: mujer colombiana de unos 22 años, piel morena, cabello negro corto estilo bob a la altura de la mandíbula; gafas de montura delgada negra; blazer vino tinto sobre camiseta blanca. Voz: voz femenina media-grave, clara, pausada y académica, acento colombiano (Bogotá) natural. Actitud: clara, segura y académicamente convincente.

Compañera 3 – Analista de marketing dice a cámara, con sincronización labial exacta:
«Primero definimos qué queremos lograr, después las actividades necesarias y finalmente cuánto costaría cada una.»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

## Escena 4. Fuerza de ventas e influenciadores

**Objetivo:** Mostrar la importancia del personal de ventas y de los creadores de contenido gastronómico.

**Ambientación:** Punto de venta gastronómico y espacio de grabación de contenido para redes sociales.

**Planos previstos:**

- Compañera 2 como integrante de la fuerza de ventas orienta a un cliente (sin diálogos añadidos).
- Compañera 3 explica la propuesta de creadores de contenido.
- Un creador graba un video corto del pollo con su teléfono.
- Pantalla de teléfono con una publicación gastronómica genérica.
- Regreso a la compañera 3 para terminar.

### Clip 26 · Escena 4 · Compañera 2 – Clienta y encargada de promociones · ~5 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 4 (Fuerza de ventas e influenciadores). Punto de venta gastronómico y espacio de grabación de contenido para redes sociales.
Acción y apoyo visual: La compañera 2, con delantal rojo sin logotipo, señala el menú a un cliente.

Personajes en cuadro (idénticos a la referencia):
- Compañera 2 – Clienta y encargada de promociones: mujer colombiana de unos 20 años, piel morena clara, cabello castaño claro rizado recogido en cola alta; camiseta amarilla mostaza y jean azul claro; pulsera de colores en la muñeca derecha. Voz: voz femenina algo más aguda, enérgica y espontánea, acento colombiano (paisa suave) natural. Actitud: espontánea, cercana y entusiasta.

Compañera 2 – Clienta y encargada de promociones dice a cámara, con sincronización labial exacta:
«La fuerza de ventas es importante porque orienta al cliente,»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 27 · Escena 4 · Compañera 2 – Clienta y encargada de promociones · ~5 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 4 (Fuerza de ventas e influenciadores). Punto de venta gastronómico y espacio de grabación de contenido para redes sociales.
Acción y apoyo visual: La compañera 2, con delantal rojo sin logotipo, señala el menú a un cliente.

Personajes en cuadro (idénticos a la referencia):
- Compañera 2 – Clienta y encargada de promociones: mujer colombiana de unos 20 años, piel morena clara, cabello castaño claro rizado recogido en cola alta; camiseta amarilla mostaza y jean azul claro; pulsera de colores en la muñeca derecha. Voz: voz femenina algo más aguda, enérgica y espontánea, acento colombiano (paisa suave) natural. Actitud: espontánea, cercana y entusiasta.

Compañera 2 – Clienta y encargada de promociones dice a cámara, con sincronización labial exacta:
«explica las opciones del menú y comunica las promociones vigentes.»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 28 · Escena 4 · Compañera 3 – Analista de marketing · ~8 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 4 (Fuerza de ventas e influenciadores). Punto de venta gastronómico y espacio de grabación de contenido para redes sociales.
Acción y apoyo visual: Un creador graba el pollo con su teléfono; publicación genérica en pantalla.

Personajes en cuadro (idénticos a la referencia):
- Compañera 3 – Analista de marketing: mujer colombiana de unos 22 años, piel morena, cabello negro corto estilo bob a la altura de la mandíbula; gafas de montura delgada negra; blazer vino tinto sobre camiseta blanca. Voz: voz femenina media-grave, clara, pausada y académica, acento colombiano (Bogotá) natural. Actitud: clara, segura y académicamente convincente.

Compañera 3 – Analista de marketing dice a cámara, con sincronización labial exacta:
«También proponemos trabajar con creadores de contenido gastronómico que prueben los productos y compartan su experiencia en redes sociales.»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 29 · Escena 4 · Compañera 3 – Analista de marketing · ~8 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 4 (Fuerza de ventas e influenciadores). Punto de venta gastronómico y espacio de grabación de contenido para redes sociales.
Acción y apoyo visual: Un creador graba el pollo con su teléfono; publicación genérica en pantalla.

Personajes en cuadro (idénticos a la referencia):
- Compañera 3 – Analista de marketing: mujer colombiana de unos 22 años, piel morena, cabello negro corto estilo bob a la altura de la mandíbula; gafas de montura delgada negra; blazer vino tinto sobre camiseta blanca. Voz: voz femenina media-grave, clara, pausada y académica, acento colombiano (Bogotá) natural. Actitud: clara, segura y académicamente convincente.

Compañera 3 – Analista de marketing dice a cámara, con sincronización labial exacta:
«Mediante videos cortos y recomendaciones auténticas, podrían atraer nuevos clientes y aumentar el reconocimiento de la marca.»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

## Escena 5. Canales de distribución

**Objetivo:** Explicar los canales directo e indirecto y los tipos de cobertura de distribución.

**Ambientación:** Restaurante, teléfono móvil, página web y representaciones de servicios de domicilio.

**Planos previstos:**

- Compañera 1 presenta el tema a cámara.
- Canal directo: compra en restaurante y en página web / aplicación.
- Canal indirecto: plataforma de domicilios genérica como intermediario.
- Cobertura: intensiva (amplia), selectiva (puntos escogidos), exclusiva (establecimientos determinados).
- Cierre: consumidores accediendo por los canales disponibles.

### Clip 30 · Escena 5 · Compañera 1 – Presentadora · ~4 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 5 (Canales de distribución). Restaurante, teléfono móvil, página web y representaciones de servicios de domicilio.
Acción y apoyo visual: Persona comprando en el restaurante; otra pidiendo en la web o aplicación.

Personajes en cuadro (idénticos a la referencia):
- Compañera 1 – Presentadora: mujer colombiana de unos 21 años, piel trigueña clara, cabello castaño oscuro, largo, liso y suelto con raya al lado; blusa blanca de botones y chaqueta roja ligera; pequeños aretes dorados; sonrisa amplia. Voz: voz femenina media, cálida, segura y expresiva, acento colombiano (Bogotá) natural. Actitud: segura, expresiva, amigable y profesional.

Compañera 1 – Presentadora dice a cámara, con sincronización labial exacta:
«Ahora hablemos de cómo llega Frisby a sus consumidores.»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 31 · Escena 5 · Compañera 1 – Presentadora · ~6 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 5 (Canales de distribución). Restaurante, teléfono móvil, página web y representaciones de servicios de domicilio.
Acción y apoyo visual: Persona comprando en el restaurante; otra pidiendo en la web o aplicación.

Personajes en cuadro (idénticos a la referencia):
- Compañera 1 – Presentadora: mujer colombiana de unos 21 años, piel trigueña clara, cabello castaño oscuro, largo, liso y suelto con raya al lado; blusa blanca de botones y chaqueta roja ligera; pequeños aretes dorados; sonrisa amplia. Voz: voz femenina media, cálida, segura y expresiva, acento colombiano (Bogotá) natural. Actitud: segura, expresiva, amigable y profesional.

Compañera 1 – Presentadora dice a cámara, con sincronización labial exacta:
«Primero tenemos el canal directo, cuando el cliente compra a través de los restaurantes,»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 32 · Escena 5 · Compañera 1 – Presentadora · ~4 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 5 (Canales de distribución). Restaurante, teléfono móvil, página web y representaciones de servicios de domicilio.
Acción y apoyo visual: Persona comprando en el restaurante; otra pidiendo en la web o aplicación.

Personajes en cuadro (idénticos a la referencia):
- Compañera 1 – Presentadora: mujer colombiana de unos 21 años, piel trigueña clara, cabello castaño oscuro, largo, liso y suelto con raya al lado; blusa blanca de botones y chaqueta roja ligera; pequeños aretes dorados; sonrisa amplia. Voz: voz femenina media, cálida, segura y expresiva, acento colombiano (Bogotá) natural. Actitud: segura, expresiva, amigable y profesional.

Compañera 1 – Presentadora dice a cámara, con sincronización labial exacta:
«la página web o la aplicación de la marca.»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 33 · Escena 5 · Compañera 1 – Presentadora · ~6 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 5 (Canales de distribución). Restaurante, teléfono móvil, página web y representaciones de servicios de domicilio.
Acción y apoyo visual: Plataforma de domicilios genérica conectando consumidor y restaurante.

Personajes en cuadro (idénticos a la referencia):
- Compañera 1 – Presentadora: mujer colombiana de unos 21 años, piel trigueña clara, cabello castaño oscuro, largo, liso y suelto con raya al lado; blusa blanca de botones y chaqueta roja ligera; pequeños aretes dorados; sonrisa amplia. Voz: voz femenina media, cálida, segura y expresiva, acento colombiano (Bogotá) natural. Actitud: segura, expresiva, amigable y profesional.

Compañera 1 – Presentadora dice a cámara, con sincronización labial exacta:
«También está el canal indirecto, cuando intervienen terceros, como las plataformas de domicilios.»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 34 · Escena 5 · Compañera 1 – Presentadora · ~6 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 5 (Canales de distribución). Restaurante, teléfono móvil, página web y representaciones de servicios de domicilio.
Acción y apoyo visual: Infografía: muchos puntos / pocos puntos elegidos / un punto exclusivo.

Personajes en cuadro (idénticos a la referencia):
- Compañera 1 – Presentadora: mujer colombiana de unos 21 años, piel trigueña clara, cabello castaño oscuro, largo, liso y suelto con raya al lado; blusa blanca de botones y chaqueta roja ligera; pequeños aretes dorados; sonrisa amplia. Voz: voz femenina media, cálida, segura y expresiva, acento colombiano (Bogotá) natural. Actitud: segura, expresiva, amigable y profesional.

Compañera 1 – Presentadora dice a cámara, con sincronización labial exacta:
«En cuanto a la cobertura, la distribución intensiva busca llegar a muchos consumidores;»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 35 · Escena 5 · Compañera 1 – Presentadora · ~7 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 5 (Canales de distribución). Restaurante, teléfono móvil, página web y representaciones de servicios de domicilio.
Acción y apoyo visual: Infografía: muchos puntos / pocos puntos elegidos / un punto exclusivo.

Personajes en cuadro (idénticos a la referencia):
- Compañera 1 – Presentadora: mujer colombiana de unos 21 años, piel trigueña clara, cabello castaño oscuro, largo, liso y suelto con raya al lado; blusa blanca de botones y chaqueta roja ligera; pequeños aretes dorados; sonrisa amplia. Voz: voz femenina media, cálida, segura y expresiva, acento colombiano (Bogotá) natural. Actitud: segura, expresiva, amigable y profesional.

Compañera 1 – Presentadora dice a cámara, con sincronización labial exacta:
«la selectiva utiliza puntos elegidos estratégicamente, y la exclusiva limita la distribución a determinados establecimientos.»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 36 · Escena 5 · Compañera 1 – Presentadora · ~6 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 5 (Canales de distribución). Restaurante, teléfono móvil, página web y representaciones de servicios de domicilio.
Acción y apoyo visual: Consumidores accediendo al producto por los canales disponibles.

Personajes en cuadro (idénticos a la referencia):
- Compañera 1 – Presentadora: mujer colombiana de unos 21 años, piel trigueña clara, cabello castaño oscuro, largo, liso y suelto con raya al lado; blusa blanca de botones y chaqueta roja ligera; pequeños aretes dorados; sonrisa amplia. Voz: voz femenina media, cálida, segura y expresiva, acento colombiano (Bogotá) natural. Actitud: segura, expresiva, amigable y profesional.

Compañera 1 – Presentadora dice a cámara, con sincronización labial exacta:
«Para Frisby, proponemos una cobertura amplia ya que es una marca muy reconocida,»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 37 · Escena 5 · Compañera 1 – Presentadora · ~5 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 5 (Canales de distribución). Restaurante, teléfono móvil, página web y representaciones de servicios de domicilio.
Acción y apoyo visual: Consumidores accediendo al producto por los canales disponibles.

Personajes en cuadro (idénticos a la referencia):
- Compañera 1 – Presentadora: mujer colombiana de unos 21 años, piel trigueña clara, cabello castaño oscuro, largo, liso y suelto con raya al lado; blusa blanca de botones y chaqueta roja ligera; pequeños aretes dorados; sonrisa amplia. Voz: voz femenina media, cálida, segura y expresiva, acento colombiano (Bogotá) natural. Actitud: segura, expresiva, amigable y profesional.

Compañera 1 – Presentadora dice a cámara, con sincronización labial exacta:
«esto dependiendo de la disponibilidad de sus restaurantes y domicilios.»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

## Escena 6. Administración del canal

**Objetivo:** Presentar los elementos necesarios para administrar correctamente los canales de distribución.

**Ambientación:** Espacio de trabajo con computadora, documentos, inventario y operación logística.

**Planos previstos:**

- Compañera 3 habla a cámara.
- Selección de aliados: reunión profesional entre representantes comerciales.
- Territorios de venta: mapa comercial ilustrativo.
- Precios, cobros y pagos: documentos genéricos sin cifras.
- Inventarios: productos organizados y persona verificando existencias.
- Tiempos de entrega: pedido preparado para despacho; cliente satisfecho recibiéndolo.

### Clip 38 · Escena 6 · Compañera 3 – Analista de marketing · ~6 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 6 (Administración del canal). Espacio de trabajo con computadora, documentos, inventario y operación logística.
Acción y apoyo visual: Reunión comercial, mapa ilustrativo, documentos administrativos genéricos.

Personajes en cuadro (idénticos a la referencia):
- Compañera 3 – Analista de marketing: mujer colombiana de unos 22 años, piel morena, cabello negro corto estilo bob a la altura de la mandíbula; gafas de montura delgada negra; blazer vino tinto sobre camiseta blanca. Voz: voz femenina media-grave, clara, pausada y académica, acento colombiano (Bogotá) natural. Actitud: clara, segura y académicamente convincente.

Compañera 3 – Analista de marketing dice a cámara, con sincronización labial exacta:
«Para administrar correctamente los canales de distribución, es importante seleccionar aliados confiables,»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 39 · Escena 6 · Compañera 3 – Analista de marketing · ~6 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 6 (Administración del canal). Espacio de trabajo con computadora, documentos, inventario y operación logística.
Acción y apoyo visual: Reunión comercial, mapa ilustrativo, documentos administrativos genéricos.

Personajes en cuadro (idénticos a la referencia):
- Compañera 3 – Analista de marketing: mujer colombiana de unos 22 años, piel morena, cabello negro corto estilo bob a la altura de la mandíbula; gafas de montura delgada negra; blazer vino tinto sobre camiseta blanca. Voz: voz femenina media-grave, clara, pausada y académica, acento colombiano (Bogotá) natural. Actitud: clara, segura y académicamente convincente.

Compañera 3 – Analista de marketing dice a cámara, con sincronización labial exacta:
«organizar los territorios de venta y establecer políticas claras de precios, cobros y pagos.»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 40 · Escena 6 · Compañera 3 – Analista de marketing · ~7 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 6 (Administración del canal). Espacio de trabajo con computadora, documentos, inventario y operación logística.
Acción y apoyo visual: Inventario, pedido listo para despacho, cliente satisfecho recibiendo su pedido.

Personajes en cuadro (idénticos a la referencia):
- Compañera 3 – Analista de marketing: mujer colombiana de unos 22 años, piel morena, cabello negro corto estilo bob a la altura de la mandíbula; gafas de montura delgada negra; blazer vino tinto sobre camiseta blanca. Voz: voz femenina media-grave, clara, pausada y académica, acento colombiano (Bogotá) natural. Actitud: clara, segura y académicamente convincente.

Compañera 3 – Analista de marketing dice a cámara, con sincronización labial exacta:
«También se deben supervisar los inventarios, los tiempos de entrega y la satisfacción del cliente.»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 41 · Escena 6 · Compañera 3 – Analista de marketing · ~6 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 6 (Administración del canal). Espacio de trabajo con computadora, documentos, inventario y operación logística.
Acción y apoyo visual: Inventario, pedido listo para despacho, cliente satisfecho recibiendo su pedido.

Personajes en cuadro (idénticos a la referencia):
- Compañera 3 – Analista de marketing: mujer colombiana de unos 22 años, piel morena, cabello negro corto estilo bob a la altura de la mandíbula; gafas de montura delgada negra; blazer vino tinto sobre camiseta blanca. Voz: voz femenina media-grave, clara, pausada y académica, acento colombiano (Bogotá) natural. Actitud: clara, segura y académicamente convincente.

Compañera 3 – Analista de marketing dice a cámara, con sincronización labial exacta:
«De esta manera, podemos mejorar el servicio y garantizar una buena experiencia de compra.»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

## Escena 7. Nuestra nueva campaña: “Frisby nos une”

**Objetivo:** Presentar la propuesta creativa, cómo se ejecutaría, cómo se distribuiría y cómo se evaluaría.

**Ambientación:** Espacio cálido, juvenil y acogedor. Las tres juntas con una mesa, pollo apanado, acompañamientos, un cartel de presupuesto y un teléfono móvil.

**Planos previstos:**

- Mientras la compañera 1 presenta, las compañeras 2 y 3 preparan la mesa.
- Compañera 1 presenta “Frisby nos une” a cámara.
- Compañera 2 muestra el reto en redes con su teléfono; personas compartiendo momentos.
- Compañera 3 muestra el cartel: creación de contenido, publicidad en redes, materiales promocionales.
- Medición: indicadores visuales (visualizaciones, compartidos, pedidos, participación) sin números.
- Las tres comparten el producto, miran a cámara y dicen el eslogan juntas.

### Clip 42 · Escena 7 · Compañera 1 – Presentadora · ~4 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 7 (Nuestra nueva campaña: “Frisby nos une”). Espacio cálido, juvenil y acogedor. Las tres juntas con una mesa, pollo apanado, acompañamientos, un cartel de presupuesto y un teléfono móvil.
Acción y apoyo visual: C1 a cámara; detrás, C2 y C3 preparan la mesa con pollo y acompañamientos.

Personajes en cuadro (idénticos a la referencia):
- Compañera 1 – Presentadora: mujer colombiana de unos 21 años, piel trigueña clara, cabello castaño oscuro, largo, liso y suelto con raya al lado; blusa blanca de botones y chaqueta roja ligera; pequeños aretes dorados; sonrisa amplia. Voz: voz femenina media, cálida, segura y expresiva, acento colombiano (Bogotá) natural. Actitud: segura, expresiva, amigable y profesional.
- Compañera 2 – Clienta y encargada de promociones: mujer colombiana de unos 20 años, piel morena clara, cabello castaño claro rizado recogido en cola alta; camiseta amarilla mostaza y jean azul claro; pulsera de colores en la muñeca derecha. Voz: voz femenina algo más aguda, enérgica y espontánea, acento colombiano (paisa suave) natural. Actitud: espontánea, cercana y entusiasta.
- Compañera 3 – Analista de marketing: mujer colombiana de unos 22 años, piel morena, cabello negro corto estilo bob a la altura de la mandíbula; gafas de montura delgada negra; blazer vino tinto sobre camiseta blanca. Voz: voz femenina media-grave, clara, pausada y académica, acento colombiano (Bogotá) natural. Actitud: clara, segura y académicamente convincente.

Compañera 1 – Presentadora dice a cámara, con sincronización labial exacta:
«¡Y llegó el momento de presentar nuestra propuesta!»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 43 · Escena 7 · Compañera 1 – Presentadora · ~6 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 7 (Nuestra nueva campaña: “Frisby nos une”). Espacio cálido, juvenil y acogedor. Las tres juntas con una mesa, pollo apanado, acompañamientos, un cartel de presupuesto y un teléfono móvil.
Acción y apoyo visual: C1 a cámara; detrás, C2 y C3 preparan la mesa con pollo y acompañamientos.

Personajes en cuadro (idénticos a la referencia):
- Compañera 1 – Presentadora: mujer colombiana de unos 21 años, piel trigueña clara, cabello castaño oscuro, largo, liso y suelto con raya al lado; blusa blanca de botones y chaqueta roja ligera; pequeños aretes dorados; sonrisa amplia. Voz: voz femenina media, cálida, segura y expresiva, acento colombiano (Bogotá) natural. Actitud: segura, expresiva, amigable y profesional.
- Compañera 2 – Clienta y encargada de promociones: mujer colombiana de unos 20 años, piel morena clara, cabello castaño claro rizado recogido en cola alta; camiseta amarilla mostaza y jean azul claro; pulsera de colores en la muñeca derecha. Voz: voz femenina algo más aguda, enérgica y espontánea, acento colombiano (paisa suave) natural. Actitud: espontánea, cercana y entusiasta.
- Compañera 3 – Analista de marketing: mujer colombiana de unos 22 años, piel morena, cabello negro corto estilo bob a la altura de la mandíbula; gafas de montura delgada negra; blazer vino tinto sobre camiseta blanca. Voz: voz femenina media-grave, clara, pausada y académica, acento colombiano (Bogotá) natural. Actitud: clara, segura y académicamente convincente.

Compañera 1 – Presentadora dice a cámara, con sincronización labial exacta:
«Se llama Frisby nos une, una campaña pensada para jóvenes, amigos y familias,»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 44 · Escena 7 · Compañera 1 – Presentadora · ~7 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 7 (Nuestra nueva campaña: “Frisby nos une”). Espacio cálido, juvenil y acogedor. Las tres juntas con una mesa, pollo apanado, acompañamientos, un cartel de presupuesto y un teléfono móvil.
Acción y apoyo visual: C1 a cámara; detrás, C2 y C3 preparan la mesa con pollo y acompañamientos.

Personajes en cuadro (idénticos a la referencia):
- Compañera 1 – Presentadora: mujer colombiana de unos 21 años, piel trigueña clara, cabello castaño oscuro, largo, liso y suelto con raya al lado; blusa blanca de botones y chaqueta roja ligera; pequeños aretes dorados; sonrisa amplia. Voz: voz femenina media, cálida, segura y expresiva, acento colombiano (Bogotá) natural. Actitud: segura, expresiva, amigable y profesional.
- Compañera 2 – Clienta y encargada de promociones: mujer colombiana de unos 20 años, piel morena clara, cabello castaño claro rizado recogido en cola alta; camiseta amarilla mostaza y jean azul claro; pulsera de colores en la muñeca derecha. Voz: voz femenina algo más aguda, enérgica y espontánea, acento colombiano (paisa suave) natural. Actitud: espontánea, cercana y entusiasta.
- Compañera 3 – Analista de marketing: mujer colombiana de unos 22 años, piel morena, cabello negro corto estilo bob a la altura de la mandíbula; gafas de montura delgada negra; blazer vino tinto sobre camiseta blanca. Voz: voz femenina media-grave, clara, pausada y académica, acento colombiano (Bogotá) natural. Actitud: clara, segura y académicamente convincente.

Compañera 1 – Presentadora dice a cámara, con sincronización labial exacta:
«porque creemos que compartir un buen pollo también es compartir risas, historias y momentos inolvidables.»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 45 · Escena 7 · Compañera 2 – Clienta y encargada de promociones · ~6 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 7 (Nuestra nueva campaña: “Frisby nos une”). Espacio cálido, juvenil y acogedor. Las tres juntas con una mesa, pollo apanado, acompañamientos, un cartel de presupuesto y un teléfono móvil.
Acción y apoyo visual: C2 muestra en su teléfono un feed de videos de personas compartiendo pollo.

Personajes en cuadro (idénticos a la referencia):
- Compañera 1 – Presentadora: mujer colombiana de unos 21 años, piel trigueña clara, cabello castaño oscuro, largo, liso y suelto con raya al lado; blusa blanca de botones y chaqueta roja ligera; pequeños aretes dorados; sonrisa amplia. Voz: voz femenina media, cálida, segura y expresiva, acento colombiano (Bogotá) natural. Actitud: segura, expresiva, amigable y profesional.
- Compañera 2 – Clienta y encargada de promociones: mujer colombiana de unos 20 años, piel morena clara, cabello castaño claro rizado recogido en cola alta; camiseta amarilla mostaza y jean azul claro; pulsera de colores en la muñeca derecha. Voz: voz femenina algo más aguda, enérgica y espontánea, acento colombiano (paisa suave) natural. Actitud: espontánea, cercana y entusiasta.
- Compañera 3 – Analista de marketing: mujer colombiana de unos 22 años, piel morena, cabello negro corto estilo bob a la altura de la mandíbula; gafas de montura delgada negra; blazer vino tinto sobre camiseta blanca. Voz: voz femenina media-grave, clara, pausada y académica, acento colombiano (Bogotá) natural. Actitud: clara, segura y académicamente convincente.

Compañera 2 – Clienta y encargada de promociones dice a cámara, con sincronización labial exacta:
«¿Cómo lo haremos? A través de videos creativos y divertidos en redes sociales,»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 46 · Escena 7 · Compañera 2 – Clienta y encargada de promociones · ~9 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 7 (Nuestra nueva campaña: “Frisby nos une”). Espacio cálido, juvenil y acogedor. Las tres juntas con una mesa, pollo apanado, acompañamientos, un cartel de presupuesto y un teléfono móvil.
Acción y apoyo visual: C2 muestra en su teléfono un feed de videos de personas compartiendo pollo.

Personajes en cuadro (idénticos a la referencia):
- Compañera 1 – Presentadora: mujer colombiana de unos 21 años, piel trigueña clara, cabello castaño oscuro, largo, liso y suelto con raya al lado; blusa blanca de botones y chaqueta roja ligera; pequeños aretes dorados; sonrisa amplia. Voz: voz femenina media, cálida, segura y expresiva, acento colombiano (Bogotá) natural. Actitud: segura, expresiva, amigable y profesional.
- Compañera 2 – Clienta y encargada de promociones: mujer colombiana de unos 20 años, piel morena clara, cabello castaño claro rizado recogido en cola alta; camiseta amarilla mostaza y jean azul claro; pulsera de colores en la muñeca derecha. Voz: voz femenina algo más aguda, enérgica y espontánea, acento colombiano (paisa suave) natural. Actitud: espontánea, cercana y entusiasta.
- Compañera 3 – Analista de marketing: mujer colombiana de unos 22 años, piel morena, cabello negro corto estilo bob a la altura de la mandíbula; gafas de montura delgada negra; blazer vino tinto sobre camiseta blanca. Voz: voz femenina media-grave, clara, pausada y académica, acento colombiano (Bogotá) natural. Actitud: clara, segura y académicamente convincente.

Compañera 2 – Clienta y encargada de promociones dice a cámara, con sincronización labial exacta:
«fotografías de nuestros combos favoritos y un reto en el que las personas compartan sus mejores momentos disfrutando de Frisby.»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 47 · Escena 7 · Compañera 2 – Clienta y encargada de promociones · ~6 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 7 (Nuestra nueva campaña: “Frisby nos une”). Espacio cálido, juvenil y acogedor. Las tres juntas con una mesa, pollo apanado, acompañamientos, un cartel de presupuesto y un teléfono móvil.
Acción y apoyo visual: Combos seleccionados destacados (sin precios inventados).

Personajes en cuadro (idénticos a la referencia):
- Compañera 1 – Presentadora: mujer colombiana de unos 21 años, piel trigueña clara, cabello castaño oscuro, largo, liso y suelto con raya al lado; blusa blanca de botones y chaqueta roja ligera; pequeños aretes dorados; sonrisa amplia. Voz: voz femenina media, cálida, segura y expresiva, acento colombiano (Bogotá) natural. Actitud: segura, expresiva, amigable y profesional.
- Compañera 2 – Clienta y encargada de promociones: mujer colombiana de unos 20 años, piel morena clara, cabello castaño claro rizado recogido en cola alta; camiseta amarilla mostaza y jean azul claro; pulsera de colores en la muñeca derecha. Voz: voz femenina algo más aguda, enérgica y espontánea, acento colombiano (paisa suave) natural. Actitud: espontánea, cercana y entusiasta.
- Compañera 3 – Analista de marketing: mujer colombiana de unos 22 años, piel morena, cabello negro corto estilo bob a la altura de la mandíbula; gafas de montura delgada negra; blazer vino tinto sobre camiseta blanca. Voz: voz femenina media-grave, clara, pausada y académica, acento colombiano (Bogotá) natural. Actitud: clara, segura y académicamente convincente.

Compañera 2 – Clienta y encargada de promociones dice a cámara, con sincronización labial exacta:
«Además, proponemos promociones especiales en combos seleccionados para motivar a más personas a participar.»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 48 · Escena 7 · Compañera 3 – Analista de marketing · ~8 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 7 (Nuestra nueva campaña: “Frisby nos une”). Espacio cálido, juvenil y acogedor. Las tres juntas con una mesa, pollo apanado, acompañamientos, un cartel de presupuesto y un teléfono móvil.
Acción y apoyo visual: C3 levanta un cartel con las tres categorías de presupuesto.

Personajes en cuadro (idénticos a la referencia):
- Compañera 1 – Presentadora: mujer colombiana de unos 21 años, piel trigueña clara, cabello castaño oscuro, largo, liso y suelto con raya al lado; blusa blanca de botones y chaqueta roja ligera; pequeños aretes dorados; sonrisa amplia. Voz: voz femenina media, cálida, segura y expresiva, acento colombiano (Bogotá) natural. Actitud: segura, expresiva, amigable y profesional.
- Compañera 2 – Clienta y encargada de promociones: mujer colombiana de unos 20 años, piel morena clara, cabello castaño claro rizado recogido en cola alta; camiseta amarilla mostaza y jean azul claro; pulsera de colores en la muñeca derecha. Voz: voz femenina algo más aguda, enérgica y espontánea, acento colombiano (paisa suave) natural. Actitud: espontánea, cercana y entusiasta.
- Compañera 3 – Analista de marketing: mujer colombiana de unos 22 años, piel morena, cabello negro corto estilo bob a la altura de la mandíbula; gafas de montura delgada negra; blazer vino tinto sobre camiseta blanca. Voz: voz femenina media-grave, clara, pausada y académica, acento colombiano (Bogotá) natural. Actitud: clara, segura y académicamente convincente.

Compañera 3 – Analista de marketing dice a cámara, con sincronización labial exacta:
«Para hacer realidad esta campaña, invertiríamos en la creación de contenido, publicidad en redes sociales y materiales promocionales.»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 49 · Escena 7 · Compañera 3 – Analista de marketing · ~6 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 7 (Nuestra nueva campaña: “Frisby nos une”). Espacio cálido, juvenil y acogedor. Las tres juntas con una mesa, pollo apanado, acompañamientos, un cartel de presupuesto y un teléfono móvil.
Acción y apoyo visual: Iconos de visualizaciones, compartidos, pedidos y participación, sin cifras.

Personajes en cuadro (idénticos a la referencia):
- Compañera 1 – Presentadora: mujer colombiana de unos 21 años, piel trigueña clara, cabello castaño oscuro, largo, liso y suelto con raya al lado; blusa blanca de botones y chaqueta roja ligera; pequeños aretes dorados; sonrisa amplia. Voz: voz femenina media, cálida, segura y expresiva, acento colombiano (Bogotá) natural. Actitud: segura, expresiva, amigable y profesional.
- Compañera 2 – Clienta y encargada de promociones: mujer colombiana de unos 20 años, piel morena clara, cabello castaño claro rizado recogido en cola alta; camiseta amarilla mostaza y jean azul claro; pulsera de colores en la muñeca derecha. Voz: voz femenina algo más aguda, enérgica y espontánea, acento colombiano (paisa suave) natural. Actitud: espontánea, cercana y entusiasta.
- Compañera 3 – Analista de marketing: mujer colombiana de unos 22 años, piel morena, cabello negro corto estilo bob a la altura de la mandíbula; gafas de montura delgada negra; blazer vino tinto sobre camiseta blanca. Voz: voz femenina media-grave, clara, pausada y académica, acento colombiano (Bogotá) natural. Actitud: clara, segura y académicamente convincente.

Compañera 3 – Analista de marketing dice a cámara, con sincronización labial exacta:
«Después, mediríamos los resultados teniendo en cuenta cuántas personas vieron y compartieron los videos,»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 50 · Escena 7 · Compañera 3 – Analista de marketing · ~5 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 7 (Nuestra nueva campaña: “Frisby nos une”). Espacio cálido, juvenil y acogedor. Las tres juntas con una mesa, pollo apanado, acompañamientos, un cartel de presupuesto y un teléfono móvil.
Acción y apoyo visual: Iconos de visualizaciones, compartidos, pedidos y participación, sin cifras.

Personajes en cuadro (idénticos a la referencia):
- Compañera 1 – Presentadora: mujer colombiana de unos 21 años, piel trigueña clara, cabello castaño oscuro, largo, liso y suelto con raya al lado; blusa blanca de botones y chaqueta roja ligera; pequeños aretes dorados; sonrisa amplia. Voz: voz femenina media, cálida, segura y expresiva, acento colombiano (Bogotá) natural. Actitud: segura, expresiva, amigable y profesional.
- Compañera 2 – Clienta y encargada de promociones: mujer colombiana de unos 20 años, piel morena clara, cabello castaño claro rizado recogido en cola alta; camiseta amarilla mostaza y jean azul claro; pulsera de colores en la muñeca derecha. Voz: voz femenina algo más aguda, enérgica y espontánea, acento colombiano (paisa suave) natural. Actitud: espontánea, cercana y entusiasta.
- Compañera 3 – Analista de marketing: mujer colombiana de unos 22 años, piel morena, cabello negro corto estilo bob a la altura de la mandíbula; gafas de montura delgada negra; blazer vino tinto sobre camiseta blanca. Voz: voz femenina media-grave, clara, pausada y académica, acento colombiano (Bogotá) natural. Actitud: clara, segura y académicamente convincente.

Compañera 3 – Analista de marketing dice a cámara, con sincronización labial exacta:
«cuántos pedidos se generaron y qué tanta participación tuvo el público.»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 51 · Escena 7 · Compañera 3 – Analista de marketing · ~5 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 7 (Nuestra nueva campaña: “Frisby nos une”). Espacio cálido, juvenil y acogedor. Las tres juntas con una mesa, pollo apanado, acompañamientos, un cartel de presupuesto y un teléfono móvil.
Acción y apoyo visual: Iconos de visualizaciones, compartidos, pedidos y participación, sin cifras.

Personajes en cuadro (idénticos a la referencia):
- Compañera 1 – Presentadora: mujer colombiana de unos 21 años, piel trigueña clara, cabello castaño oscuro, largo, liso y suelto con raya al lado; blusa blanca de botones y chaqueta roja ligera; pequeños aretes dorados; sonrisa amplia. Voz: voz femenina media, cálida, segura y expresiva, acento colombiano (Bogotá) natural. Actitud: segura, expresiva, amigable y profesional.
- Compañera 2 – Clienta y encargada de promociones: mujer colombiana de unos 20 años, piel morena clara, cabello castaño claro rizado recogido en cola alta; camiseta amarilla mostaza y jean azul claro; pulsera de colores en la muñeca derecha. Voz: voz femenina algo más aguda, enérgica y espontánea, acento colombiano (paisa suave) natural. Actitud: espontánea, cercana y entusiasta.
- Compañera 3 – Analista de marketing: mujer colombiana de unos 22 años, piel morena, cabello negro corto estilo bob a la altura de la mandíbula; gafas de montura delgada negra; blazer vino tinto sobre camiseta blanca. Voz: voz femenina media-grave, clara, pausada y académica, acento colombiano (Bogotá) natural. Actitud: clara, segura y académicamente convincente.

Compañera 3 – Analista de marketing dice a cámara, con sincronización labial exacta:
«Así sabremos si nuestra campaña logró conectar con los consumidores.»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 52 · Escena 7 · Las tres juntas · ~6 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 7 (Nuestra nueva campaña: “Frisby nos une”). Espacio cálido, juvenil y acogedor. Las tres juntas con una mesa, pollo apanado, acompañamientos, un cartel de presupuesto y un teléfono móvil.
Acción y apoyo visual: Las tres comparten el pollo, miran a cámara y dicen el eslogan al unísono.

Personajes en cuadro (idénticos a la referencia):
- Compañera 1 – Presentadora: mujer colombiana de unos 21 años, piel trigueña clara, cabello castaño oscuro, largo, liso y suelto con raya al lado; blusa blanca de botones y chaqueta roja ligera; pequeños aretes dorados; sonrisa amplia. Voz: voz femenina media, cálida, segura y expresiva, acento colombiano (Bogotá) natural. Actitud: segura, expresiva, amigable y profesional.
- Compañera 2 – Clienta y encargada de promociones: mujer colombiana de unos 20 años, piel morena clara, cabello castaño claro rizado recogido en cola alta; camiseta amarilla mostaza y jean azul claro; pulsera de colores en la muñeca derecha. Voz: voz femenina algo más aguda, enérgica y espontánea, acento colombiano (paisa suave) natural. Actitud: espontánea, cercana y entusiasta.
- Compañera 3 – Analista de marketing: mujer colombiana de unos 22 años, piel morena, cabello negro corto estilo bob a la altura de la mandíbula; gafas de montura delgada negra; blazer vino tinto sobre camiseta blanca. Voz: voz femenina media-grave, clara, pausada y académica, acento colombiano (Bogotá) natural. Actitud: clara, segura y académicamente convincente.

Las tres juntas, mirando a cámara, dicen al unísono, coordinadas y perfectamente audibles:
«¡Frisby nos une, porque los mejores momentos saben mejor cuando se comparten!»

Las tres mueven los labios a la vez. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

## Escena 8. Cierre

**Objetivo:** Cerrar con un mensaje emotivo que una a Frisby, el servicio y los momentos compartidos.

**Ambientación:** Mesa con el producto presentado de forma apetitosa; las tres juntas, ambiente cálido.

**Planos previstos:**

- C1 dice su frase; inserto de una promoción que despierta el antojo.
- C2 dice su frase; inserto de un pedido preparado o entregado.
- C3 dice su frase; inserto de un momento compartido en la mesa.
- Plano general de las tres; muestran el producto y dicen el eslogan final.
- Mantener el plano final unos segundos; logotipo oficial insertado en edición.

### Clip 53 · Escena 8 · Compañera 1 – Presentadora · ~5 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 8 (Cierre). Mesa con el producto presentado de forma apetitosa; las tres juntas, ambiente cálido.
Acción y apoyo visual: Inserto: una promoción en pantalla que despierta el antojo.

Personajes en cuadro (idénticos a la referencia):
- Compañera 1 – Presentadora: mujer colombiana de unos 21 años, piel trigueña clara, cabello castaño oscuro, largo, liso y suelto con raya al lado; blusa blanca de botones y chaqueta roja ligera; pequeños aretes dorados; sonrisa amplia. Voz: voz femenina media, cálida, segura y expresiva, acento colombiano (Bogotá) natural. Actitud: segura, expresiva, amigable y profesional.
- Compañera 2 – Clienta y encargada de promociones: mujer colombiana de unos 20 años, piel morena clara, cabello castaño claro rizado recogido en cola alta; camiseta amarilla mostaza y jean azul claro; pulsera de colores en la muñeca derecha. Voz: voz femenina algo más aguda, enérgica y espontánea, acento colombiano (paisa suave) natural. Actitud: espontánea, cercana y entusiasta.
- Compañera 3 – Analista de marketing: mujer colombiana de unos 22 años, piel morena, cabello negro corto estilo bob a la altura de la mandíbula; gafas de montura delgada negra; blazer vino tinto sobre camiseta blanca. Voz: voz femenina media-grave, clara, pausada y académica, acento colombiano (Bogotá) natural. Actitud: clara, segura y académicamente convincente.

Compañera 1 – Presentadora dice a cámara, con sincronización labial exacta:
«En Frisby, todo comienza con una promoción que despierta el antojo.»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 54 · Escena 8 · Compañera 2 – Clienta y encargada de promociones · ~5 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 8 (Cierre). Mesa con el producto presentado de forma apetitosa; las tres juntas, ambiente cálido.
Acción y apoyo visual: Inserto: un pedido preparado y entregado.

Personajes en cuadro (idénticos a la referencia):
- Compañera 1 – Presentadora: mujer colombiana de unos 21 años, piel trigueña clara, cabello castaño oscuro, largo, liso y suelto con raya al lado; blusa blanca de botones y chaqueta roja ligera; pequeños aretes dorados; sonrisa amplia. Voz: voz femenina media, cálida, segura y expresiva, acento colombiano (Bogotá) natural. Actitud: segura, expresiva, amigable y profesional.
- Compañera 2 – Clienta y encargada de promociones: mujer colombiana de unos 20 años, piel morena clara, cabello castaño claro rizado recogido en cola alta; camiseta amarilla mostaza y jean azul claro; pulsera de colores en la muñeca derecha. Voz: voz femenina algo más aguda, enérgica y espontánea, acento colombiano (paisa suave) natural. Actitud: espontánea, cercana y entusiasta.
- Compañera 3 – Analista de marketing: mujer colombiana de unos 22 años, piel morena, cabello negro corto estilo bob a la altura de la mandíbula; gafas de montura delgada negra; blazer vino tinto sobre camiseta blanca. Voz: voz femenina media-grave, clara, pausada y académica, acento colombiano (Bogotá) natural. Actitud: clara, segura y académicamente convincente.

Compañera 2 – Clienta y encargada de promociones dice a cámara, con sincronización labial exacta:
«Continúa con un servicio que lleva nuestro sabor hasta donde estés.»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 55 · Escena 8 · Compañera 3 – Analista de marketing · ~4 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 8 (Cierre). Mesa con el producto presentado de forma apetitosa; las tres juntas, ambiente cálido.
Acción y apoyo visual: Inserto: amigos compartiendo alrededor de la mesa.

Personajes en cuadro (idénticos a la referencia):
- Compañera 1 – Presentadora: mujer colombiana de unos 21 años, piel trigueña clara, cabello castaño oscuro, largo, liso y suelto con raya al lado; blusa blanca de botones y chaqueta roja ligera; pequeños aretes dorados; sonrisa amplia. Voz: voz femenina media, cálida, segura y expresiva, acento colombiano (Bogotá) natural. Actitud: segura, expresiva, amigable y profesional.
- Compañera 2 – Clienta y encargada de promociones: mujer colombiana de unos 20 años, piel morena clara, cabello castaño claro rizado recogido en cola alta; camiseta amarilla mostaza y jean azul claro; pulsera de colores en la muñeca derecha. Voz: voz femenina algo más aguda, enérgica y espontánea, acento colombiano (paisa suave) natural. Actitud: espontánea, cercana y entusiasta.
- Compañera 3 – Analista de marketing: mujer colombiana de unos 22 años, piel morena, cabello negro corto estilo bob a la altura de la mandíbula; gafas de montura delgada negra; blazer vino tinto sobre camiseta blanca. Voz: voz femenina media-grave, clara, pausada y académica, acento colombiano (Bogotá) natural. Actitud: clara, segura y académicamente convincente.

Compañera 3 – Analista de marketing dice a cámara, con sincronización labial exacta:
«Y termina con momentos que siempre queremos repetir.»

Solo mueve los labios quien habla. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

### Clip 56 · Escena 8 · Las tres juntas · ~4 s

```text
Comercial gastronómico colombiano moderno, 16:9, 1080p, iluminación cálida y cinematográfica, colores rojo, blanco y amarillo, escenario limpio y acogedor, movimientos de cámara suaves, comida apetitosa y crujiente con luz gastronómica profesional.

Escena 8 (Cierre). Mesa con el producto presentado de forma apetitosa; las tres juntas, ambiente cálido.
Acción y apoyo visual: Plano general de las tres sonriendo y mostrando el producto.

Personajes en cuadro (idénticos a la referencia):
- Compañera 1 – Presentadora: mujer colombiana de unos 21 años, piel trigueña clara, cabello castaño oscuro, largo, liso y suelto con raya al lado; blusa blanca de botones y chaqueta roja ligera; pequeños aretes dorados; sonrisa amplia. Voz: voz femenina media, cálida, segura y expresiva, acento colombiano (Bogotá) natural. Actitud: segura, expresiva, amigable y profesional.
- Compañera 2 – Clienta y encargada de promociones: mujer colombiana de unos 20 años, piel morena clara, cabello castaño claro rizado recogido en cola alta; camiseta amarilla mostaza y jean azul claro; pulsera de colores en la muñeca derecha. Voz: voz femenina algo más aguda, enérgica y espontánea, acento colombiano (paisa suave) natural. Actitud: espontánea, cercana y entusiasta.
- Compañera 3 – Analista de marketing: mujer colombiana de unos 22 años, piel morena, cabello negro corto estilo bob a la altura de la mandíbula; gafas de montura delgada negra; blazer vino tinto sobre camiseta blanca. Voz: voz femenina media-grave, clara, pausada y académica, acento colombiano (Bogotá) natural. Actitud: clara, segura y académicamente convincente.

Las tres juntas, mirando a cámara, dicen al unísono, coordinadas y perfectamente audibles:
«¡Frisby, mucho más que pollo… ¡momentos para compartir!»

Las tres mueven los labios a la vez. Ritmo natural, sin acelerar; pausa breve al final.
Evitar: Sin logotipos ni texto de marca generados (el logo oficial se inserta en edición), sin texto ilegible en pantalla, sin cifras ni precios inventados, sin manos ni rostros deformes, sin narrador ni voces adicionales, sin subtítulos quemados, sin música que tape la voz.
```

## Lista de control antes de entregar

- [ ] Están las ocho escenas en orden.
- [ ] Están los 56 clips y cada diálogo se oye completo y con la compañera correcta.
- [ ] Escena 7: preparación de la mesa, reto en redes, cartel de presupuesto, medición sin cifras y eslogan conjunto.
- [ ] Escena 8: tres frases individuales y el eslogan final literal.
- [ ] Las tres protagonistas conservan rostro, peinado, vestuario y voz en todos los clips.
- [ ] No hay logotipos falsos, cifras inventadas ni texto ilegible.
- [ ] La música queda siempre por debajo de las voces.
