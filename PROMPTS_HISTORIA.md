# Frisby: El sabor de compartir — clips narrativos para IA

Este es el paquete para convertir el video en una historia actuada, con el mismo estilo fotorrealista de la apertura (`referencia_ia/apertura_original.mp4`). Toda la historia ocurre en un restaurante Frisby: las tres amigas van a preparar su trabajo de mercadeo, lo viven ahí mismo y al final invitan a una cuarta amiga que llegó sola.

## Cómo usarlo

1. En tu herramienta de video (la que usaste para la apertura), usa **imagen a video** con la referencia que indica cada clip (`referencia_ia/ref_grupo_mesa.jpg` o `ref_presentadora.jpg`). Así se mantienen los mismos rostros y la misma ropa.
2. Genera cada clip con su prompt y guárdalo en `clips_ia/` con el nombre indicado (`clip_01.mp4` … `clip_56.mp4`, más `clip_52_antes.mp4` para el momento sin diálogo).
3. Si la herramienta genera voz, puede hablar el texto entre «». Si no, no importa: el montaje usa las voces ya grabadas de cada bloque.
4. Ejecuta `python3 produccion/montar_historia.py` (o pídeme que lo haga). Une los clips en orden con voces, música y logo. Si falta algún clip, pone temporalmente ese pedazo del cortometraje animado para que el video siempre esté completo.

## Personajes (de tu referencia)

- **C1:** Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva
- **C2:** Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea
- **C3:** Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena
- **C4:** Amiga 4 (sin diálogo): mujer joven latina, cabello castaño largo ondulado, camiseta azul petróleo

## Escena 1. Introducción

### Clip 01 · ~5 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano medio en movimiento. Acción: C1, C2 y C3 entran al restaurante; un empleado pasa con una bandeja de pollo humeante y C2 la sigue con la mirada, se lleva la mano al estómago y lo dice a sus amigas riendo.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 2 dice en español latinoamericano, con naturalidad y sincronía labial: «¡Uy, qué hambre! ¿A quién no se le antoja un pollo delicioso para compartir con sus amigas?»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 02 · ~6 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano medio. Acción: se sientan en un cubículo; C1 deja el portátil sobre la mesa y habla a sus amigas con calidez.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 1 dice en español latinoamericano, con naturalidad y sincronía labial: «Hay sabores que no solo quitan el hambre, sino que también crean momentos inolvidables.»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 03 · ~7 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano medio. Acción: C1 señala con la cabeza el mostrador, donde sirven pollo; las amigas miran y asienten.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 1 dice en español latinoamericano, con naturalidad y sincronía labial: «Y cuando pensamos en compartir algo delicioso, Frisby es una marca que muchos colombianos reconocen.»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 04 · ~6 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano detalle y medio. Acción: en la mesa de al lado una familia recibe un combo y lo comparte; C1 lo señala con la mano mientras habla.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 1 dice en español latinoamericano, con naturalidad y sincronía labial: «Su pollo apanado y sus diferentes combos que son perfectos para disfrutar con amigos y con familia.»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 05 · ~4 s · referencia `referencia_ia/ref_presentadora.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: primer plano. Acción: C1 se inclina hacia sus amigas, baja la voz con aire de misterio; ellas se acercan intrigadas.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 1 dice en español latinoamericano, con naturalidad y sincronía labial: «Pero ¿qué hay detrás de una marca tan reconocida?»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 06 · ~3 s · referencia `referencia_ia/ref_presentadora.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: primer plano. Acción: C1 gira hacia la cámara y levanta un dedo.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 1 dice en español latinoamericano, con naturalidad y sincronía labial: «Hoy te mostraremos cómo se promociona,»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 07 · ~5 s · referencia `referencia_ia/ref_presentadora.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: primer plano. Acción: C1 sigue hablando a cámara contando con los dedos; detrás, sus amigas sonríen; termina con un guiño.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 1 dice en español latinoamericano, con naturalidad y sincronía labial: «cómo llega a sus clientes y cómo crearíamos una nueva campaña para ella.»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

## Escena 2. Mezcla de promoción

### Clip 08 · ~6 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano medio. Acción: C1 saca su celular y lo pone en el centro de la mesa; las tres se juntan para verlo.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 1 dice en español latinoamericano, con naturalidad y sincronía labial: «Para dar a conocer sus productos, Frisby puede utilizar diferentes herramientas de promoción.»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 09 · ~5 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano sobre el hombro. Acción: C1 desliza el dedo por la pantalla (la pantalla ilumina sus caras, no se lee); C2 abre los ojos con antojo.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 1 dice en español latinoamericano, con naturalidad y sincronía labial: «Una de ellas es la publicidad, mediante anuncios en redes sociales,»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 10 · ~4 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: primer plano de reacciones. Acción: C2 y C3 se ríen de un video que ven en el celular y se miran con antojo.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 1 dice en español latinoamericano, con naturalidad y sincronía labial: «videos e imágenes que despiertan el deseo de comprar.»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 11 · ~7 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano medio. Acción: C2 señala entusiasmada el tablero de promociones del restaurante, al fondo y desenfocado, y luego a sus amigas.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 2 dice en español latinoamericano, con naturalidad y sincronía labial: «También están las promociones de ventas, como combos y descuentos durante determinadas temporadas, que incentivan la compra.»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 12 · ~3 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano medio. Acción: C2 muestra en su celular una iniciativa solidaria y se lleva la mano al corazón.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 2 dice en español latinoamericano, con naturalidad y sincronía labial: «Otra herramienta son las relaciones públicas,»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 13 · ~5 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: primer plano. Acción: C1 y C3 asienten conmovidas mientras C2 termina de explicar.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 2 dice en español latinoamericano, con naturalidad y sincronía labial: «que ayudan a fortalecer la imagen de la empresa y su relación con la comunidad.»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 14 · ~7 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano medio. Acción: C3 gira su portátil hacia las amigas y les muestra la página de pedidos (pantalla sin texto legible).
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 3 dice en español latinoamericano, con naturalidad y sincronía labial: «Además, el marketing directo permite comunicarse con los consumidores a través de canales digitales,»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 15 · ~6 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano detalle y medio. Acción: a C1 le vibra el celular con una notificación promocional; se la muestra a C3, que sonríe y sigue explicando.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 3 dice en español latinoamericano, con naturalidad y sincronía labial: «como su página web y sus comunicaciones promocionales, para dar a conocer productos y ofertas.»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 16 · ~5 s · referencia `referencia_ia/ref_presentadora.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano medio. Acción: C1 chasquea los dedos emocionada y enumera con los dedos de la mano.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 1 dice en español latinoamericano, con naturalidad y sincronía labial: «¡Exactamente! Cada herramienta cumple una función: informar, despertar el interés,»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 17 · ~5 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano medio. Acción: las tres chocan las manos; C1 termina la idea sonriendo.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 1 dice en español latinoamericano, con naturalidad y sincronía labial: «incentivar la compra y fortalecer la relación con los consumidores.»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 18 · ~5 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano medio. Acción: C2 toma su celular con picardía, elige un combo y toca para pedir.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 2 dice en español latinoamericano, con naturalidad y sincronía labial: «¡Miren esto! Puedo revisar el menú, elegir mi combo y pedirlo sin salir de casa.»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 19 · ~3 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano medio. Acción: C2 levanta los brazos celebrando; las otras se ríen.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 2 dice en español latinoamericano, con naturalidad y sincronía labial: «¡Se me antojó comer en Frisby!»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

## Escena 3. Estrategias de promoción y presupuesto

### Clip 20 · ~5 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano medio. Acción: C3 toma una servilleta y un bolígrafo y dibuja mientras explica.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 3 dice en español latinoamericano, con naturalidad y sincronía labial: «En cuanto a las estrategias de promoción, encontramos la estrategia de atracción,»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 21 · ~6 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano general. Acción: C3 señala con el bolígrafo a otras mesas donde la gente mira sus celulares y luego pide.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 3 dice en español latinoamericano, con naturalidad y sincronía labial: «que busca despertar el interés del consumidor mediante publicidad y redes sociales.»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 22 · ~3 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: primer plano. Acción: C3 da vuelta a la servilleta; C1 y C2 la escuchan atentas.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 3 dice en español latinoamericano, con naturalidad y sincronía labial: «También está la estrategia de empuje,»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 23 · ~6 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano general. Acción: C3 señala el mostrador, donde los empleados organizan material promocional y bandejas.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 3 dice en español latinoamericano, con naturalidad y sincronía labial: «que busca incentivar a los puntos de venta y a los intermediarios para que impulsen los productos.»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 24 · ~6 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano medio. Acción: C3 abre un cuaderno y traza tres columnas.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 3 dice en español latinoamericano, con naturalidad y sincronía labial: «Para nuestra campaña, utilizaríamos el método de presupuesto por objetivos y tareas.»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 25 · ~8 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano detalle y medio. Acción: C3 toca cada columna con el bolígrafo; C1 y C2 toman notas.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 3 dice en español latinoamericano, con naturalidad y sincronía labial: «Primero definimos qué queremos lograr, después las actividades necesarias y finalmente cuánto costaría cada una.»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

## Escena 4. Fuerza de ventas e influenciadores

### Clip 26 · ~4 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano medio en el mostrador. Acción: las amigas están en la caja; un cajero con uniforme blanco y rojo y gorra roja las atiende con amabilidad; C2 lo comenta a sus amigas.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 2 dice en español latinoamericano, con naturalidad y sincronía labial: «La fuerza de ventas es importante porque orienta al cliente,»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 27 · ~4 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano medio. Acción: el cajero señala opciones del menú y las promociones; C2 asiente y elige.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 2 dice en español latinoamericano, con naturalidad y sincronía labial: «explica las opciones del menú y comunica las promociones vigentes.»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 28 · ~9 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano general. Acción: C3 nota en una mesa cercana a una creadora de contenido que graba su pollo con un aro de luz; se lo cuenta a sus amigas.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 3 dice en español latinoamericano, con naturalidad y sincronía labial: «También proponemos trabajar con creadores de contenido gastronómico que prueben los productos y compartan su experiencia en redes sociales.»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 29 · ~8 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano medio. Acción: la creadora prueba el pollo, sonríe y levanta el pulgar a su celular; C3 sigue explicando, divertida.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 3 dice en español latinoamericano, con naturalidad y sincronía labial: «Mediante videos cortos y recomendaciones auténticas, podrían atraer nuevos clientes y aumentar el reconocimiento de la marca.»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

## Escena 5. Canales de distribución

### Clip 30 · ~4 s · referencia `referencia_ia/ref_presentadora.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano medio junto al ventanal. Acción: C1 mira por el ventanal; afuera esperan domiciliarios en moto con chaquetas genéricas, sin marca.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 1 dice en español latinoamericano, con naturalidad y sincronía labial: «Ahora hablemos de cómo llega Frisby a sus consumidores.»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 31 · ~5 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano general. Acción: C1 señala la puerta, por donde entran clientes a comprar; otra persona hace un pedido en su celular.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 1 dice en español latinoamericano, con naturalidad y sincronía labial: «Primero tenemos el canal directo, cuando el cliente compra a través de los restaurantes,»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 32 · ~3 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano medio. Acción: un cliente recoge en el mostrador un pedido que hizo desde la aplicación.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 1 dice en español latinoamericano, con naturalidad y sincronía labial: «la página web o la aplicación de la marca.»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 33 · ~6 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano general. Acción: C1 señala a un domiciliario que recoge una bolsa en el punto de entrega y sale en su moto.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 1 dice en español latinoamericano, con naturalidad y sincronía labial: «También está el canal indirecto, cuando intervienen terceros, como las plataformas de domicilios.»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 34 · ~6 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano cenital de la mesa. Acción: C1 esparce papas fritas por toda la bandeja como un mapa, muchas en todas partes.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 1 dice en español latinoamericano, con naturalidad y sincronía labial: «En cuanto a la cobertura, la distribución intensiva busca llegar a muchos consumidores;»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 35 · ~8 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano cenital y medio. Acción: C1 retira casi todas las papas y deja unas pocas, luego solo una; sus amigas se ríen.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 1 dice en español latinoamericano, con naturalidad y sincronía labial: «la selectiva utiliza puntos elegidos estratégicamente, y la exclusiva limita la distribución a determinados establecimientos.»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 36 · ~5 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano medio. Acción: C1 vuelve a esparcir las papas por toda la bandeja, convencida.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 1 dice en español latinoamericano, con naturalidad y sincronía labial: «Para Frisby, proponemos una cobertura amplia ya que es una marca muy reconocida,»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 37 · ~5 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: primer plano. Acción: C1 hace un gesto de 'depende' con la mano; C2 y C3 asienten.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 1 dice en español latinoamericano, con naturalidad y sincronía labial: «esto dependiendo de la disponibilidad de sus restaurantes y domicilios.»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

## Escena 6. Administración del canal

### Clip 38 · ~7 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano general. Acción: C3 observa cómo la administradora del local recibe a un proveedor con cajas y se saludan.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 3 dice en español latinoamericano, con naturalidad y sincronía labial: «Para administrar correctamente los canales de distribución, es importante seleccionar aliados confiables,»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 39 · ~6 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano medio. Acción: la administradora y el proveedor revisan una tableta y unos papeles, y firman.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 3 dice en español latinoamericano, con naturalidad y sincronía labial: «organizar los territorios de venta y establecer políticas claras de precios, cobros y pagos.»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 40 · ~6 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano medio de la cocina abierta. Acción: una empleada revisa el inventario y un temporizador; se empaca un pedido en una bolsa.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 3 dice en español latinoamericano, con naturalidad y sincronía labial: «También se deben supervisar los inventarios, los tiempos de entrega y la satisfacción del cliente.»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 41 · ~6 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano medio. Acción: un cliente recibe su pedido y sonríe satisfecho; C3 termina la idea mirando a sus amigas.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 3 dice en español latinoamericano, con naturalidad y sincronía labial: «De esta manera, podemos mejorar el servicio y garantizar una buena experiencia de compra.»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

## Escena 7. Nuestra nueva campaña: “Frisby nos une”

### Clip 42 · ~4 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano medio. Acción: un empleado llega con una gran bandeja de pollo a su mesa; C1 se pone de pie emocionada.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 1 dice en español latinoamericano, con naturalidad y sincronía labial: «¡Y llegó el momento de presentar nuestra propuesta!»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 43 · ~5 s · referencia `referencia_ia/ref_presentadora.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano medio. Acción: C1 presenta la idea con los brazos abiertos, mirando a sus amigas y luego a cámara.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 1 dice en español latinoamericano, con naturalidad y sincronía labial: «Se llama Frisby nos une, una campaña pensada para jóvenes, amigos y familias,»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 44 · ~7 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano medio. Acción: las tres comparten el pollo, se ríen y se cuentan historias mientras C1 habla.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 1 dice en español latinoamericano, con naturalidad y sincronía labial: «porque creemos que compartir un buen pollo también es compartir risas, historias y momentos inolvidables.»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 45 · ~5 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano medio. Acción: C2 levanta su celular para grabar un video selfie de las tres con el pollo.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 2 dice en español latinoamericano, con naturalidad y sincronía labial: «¿Cómo lo haremos? A través de videos creativos y divertidos en redes sociales,»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 46 · ~8 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: primer plano. Acción: las tres hacen la pose del reto ante el celular y se ríen al verse.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 2 dice en español latinoamericano, con naturalidad y sincronía labial: «fotografías de nuestros combos favoritos y un reto en el que las personas compartan sus mejores momentos disfrutando de Frisby.»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 47 · ~7 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano medio. Acción: C2 levanta una caja de combo hacia la cámara con una sonrisa cómplice.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 2 dice en español latinoamericano, con naturalidad y sincronía labial: «Además, proponemos promociones especiales en combos seleccionados para motivar a más personas a participar.»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 48 · ~9 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano medio. Acción: C3 muestra su cuaderno con tres dibujos sencillos (una cámara, un megáfono, un volante), sin texto legible.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 3 dice en español latinoamericano, con naturalidad y sincronía labial: «Para hacer realidad esta campaña, invertiríamos en la creación de contenido, publicidad en redes sociales y materiales promocionales.»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 49 · ~7 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano sobre el hombro. Acción: al celular de C3 le llegan corazones y notificaciones (sin números); ella se sorprende.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 3 dice en español latinoamericano, con naturalidad y sincronía labial: «Después, mediríamos los resultados teniendo en cuenta cuántas personas vieron y compartieron los videos,»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 50 · ~5 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: primer plano de reacciones. Acción: las tres miran el celular emocionadas.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 3 dice en español latinoamericano, con naturalidad y sincronía labial: «cuántos pedidos se generaron y qué tanta participación tuvo el público.»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 51 · ~5 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano medio. Acción: C3 cierra el cuaderno, satisfecha, y mira a sus amigas.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 3 dice en español latinoamericano, con naturalidad y sincronía labial: «Así sabremos si nuestra campaña logró conectar con los consumidores.»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 52_antes · ~9 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano medio. Acción: C4 entra sola al restaurante con una bandeja, busca dónde sentarse y se queda de pie, un poco triste; C2 la ve, la saluda con la mano y le hace espacio; C3 le ofrece una presa de pollo; C4 sonríe emocionada y se sienta con ellas.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Amiga 4 (sin diálogo): mujer joven latina, cabello castaño largo ondulado, camiseta azul petróleo.
Sin diálogo: solo acción, gestos y miradas.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 52 · ~5 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano medio. Acción: C1, C2, C3 y C4 brindan con sus vasos y dicen el eslogan juntas a cámara (C4 sonríe sin hablar).
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Amiga 4 (sin diálogo): mujer joven latina, cabello castaño largo ondulado, camiseta azul petróleo.
C1, C2 y C3 dicen a la vez, en español latinoamericano, con naturalidad: «¡Frisby nos une, porque los mejores momentos saben mejor cuando se comparten!»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

## Escena 8. Cierre

### Clip 53 · ~4 s · referencia `referencia_ia/ref_presentadora.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: primer plano, luz de atardecer. Acción: C1 habla mirando a sus amigas, con una presa en la mano.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 1 dice en español latinoamericano, con naturalidad y sincronía labial: «En Frisby, todo comienza con una promoción que despierta el antojo.»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 54 · ~4 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: primer plano. Acción: C2 habla con calidez; al fondo un domiciliario sale con un pedido.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 2 dice en español latinoamericano, con naturalidad y sincronía labial: «Continúa con un servicio que lleva nuestro sabor hasta donde estés.»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 55 · ~4 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: primer plano. Acción: C3 sonríe mirando a todas alrededor de la mesa.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
Compañera 3 dice en español latinoamericano, con naturalidad y sincronía labial: «Y termina con momentos que siempre queremos repetir.»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```

### Clip 56 · ~4 s · referencia `referencia_ia/ref_grupo_mesa.jpg`

```text
Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural. Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo apanado crujiente, papas y bebidas.
Plano: plano medio que se abre a plano general. Acción: las cuatro levantan una presa de pollo y ríen; la cámara se aleja y muestra el restaurante lleno.
Personajes idénticos a la referencia: Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva; Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea; Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena.
C1, C2 y C3 dicen a la vez, en español latinoamericano, con naturalidad: «¡Frisby, mucho más que pollo… ¡momentos para compartir!»
Solo mueve los labios quien habla; las demás escuchan y reaccionan.
Evitar: sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, sin cambios de rostro o vestuario, sin narrador.
```
