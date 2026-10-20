"""Puesta en escena narrativa para generar el video con IA (estilo de la apertura
fotorrealista que entregó el equipo: cuatro amigas en un restaurante Frisby).

Cada bloque de diálogo (mismo número que en las voces y en PROMPTS_POR_CLIP.md)
se convierte en una acción dentro de la historia, no en una ilustración de la frase.
"""

# Personajes tomados de referencia_ia/ref_grupo_mesa.jpg y ref_presentadora.jpg
PERSONAJES = {
    "C1": "Compañera 1 (presentadora): mujer joven latina, cabello oscuro muy rizado a los hombros, camiseta roja ajustada, sonrisa amplia y expresiva",
    "C2": "Compañera 2 (clienta entusiasta): mujer joven latina, cabello oscuro largo y ondulado, blusa amarilla mostaza de hombros descubiertos, muy espontánea",
    "C3": "Compañera 3 (analista): mujer joven latina, cabello negro lacio con flequillo recto, chaqueta de cuero verde sobre blusa blanca, segura y serena",
    "C4": "Amiga 4 (sin diálogo): mujer joven latina, cabello castaño largo ondulado, camiseta azul petróleo",
}

ESCENARIO = (
    "Interior de un restaurante de pollo apanado colombiano, cálido y moderno, tonos rojo, "
    "amarillo y madera, luz cálida de tarde por los ventanales, mesas con bandejas de pollo "
    "apanado crujiente, papas y bebidas"
)

ESTILO = (
    "Video fotorrealista cinematográfico, 16:9, mismo estilo, luz y personajes que la imagen de "
    "referencia, profundidad de campo suave, cámara en movimiento suave, actuación natural"
)

NEGATIVOS = (
    "sin texto en pantalla, sin subtítulos, sin carteles legibles en primer plano, sin logotipos "
    "deformados (el logotipo oficial se pone en edición), sin cifras ni precios, sin manos deformes, "
    "sin cambios de rostro o vestuario, sin narrador"
)

# acción y plano de cada bloque (n -> (referencia, plano, acción))
G, P = "ref_grupo_mesa.jpg", "ref_presentadora.jpg"
ACCIONES = {
    1: (G, "plano medio en movimiento", "C1, C2 y C3 entran al restaurante; un empleado pasa con una bandeja de pollo humeante y C2 la sigue con la mirada, se lleva la mano al estómago y lo dice a sus amigas riendo"),
    2: (G, "plano medio", "se sientan en un cubículo; C1 deja el portátil sobre la mesa y habla a sus amigas con calidez"),
    3: (G, "plano medio", "C1 señala con la cabeza el mostrador, donde sirven pollo; las amigas miran y asienten"),
    4: (G, "plano detalle y medio", "en la mesa de al lado una familia recibe un combo y lo comparte; C1 lo señala con la mano mientras habla"),
    5: (P, "primer plano", "C1 se inclina hacia sus amigas, baja la voz con aire de misterio; ellas se acercan intrigadas"),
    6: (P, "primer plano", "C1 gira hacia la cámara y levanta un dedo"),
    7: (P, "primer plano", "C1 sigue hablando a cámara contando con los dedos; detrás, sus amigas sonríen; termina con un guiño"),
    8: (G, "plano medio", "C1 saca su celular y lo pone en el centro de la mesa; las tres se juntan para verlo"),
    9: (G, "plano sobre el hombro", "C1 desliza el dedo por la pantalla (la pantalla ilumina sus caras, no se lee); C2 abre los ojos con antojo"),
    10: (G, "primer plano de reacciones", "C2 y C3 se ríen de un video que ven en el celular y se miran con antojo"),
    11: (G, "plano medio", "C2 señala entusiasmada el tablero de promociones del restaurante, al fondo y desenfocado, y luego a sus amigas"),
    12: (G, "plano medio", "C2 muestra en su celular una iniciativa solidaria y se lleva la mano al corazón"),
    13: (G, "primer plano", "C1 y C3 asienten conmovidas mientras C2 termina de explicar"),
    14: (G, "plano medio", "C3 gira su portátil hacia las amigas y les muestra la página de pedidos (pantalla sin texto legible)"),
    15: (G, "plano detalle y medio", "a C1 le vibra el celular con una notificación promocional; se la muestra a C3, que sonríe y sigue explicando"),
    16: (P, "plano medio", "C1 chasquea los dedos emocionada y enumera con los dedos de la mano"),
    17: (G, "plano medio", "las tres chocan las manos; C1 termina la idea sonriendo"),
    18: (G, "plano medio", "C2 toma su celular con picardía, elige un combo y toca para pedir"),
    19: (G, "plano medio", "C2 levanta los brazos celebrando; las otras se ríen"),
    20: (G, "plano medio", "C3 toma una servilleta y un bolígrafo y dibuja mientras explica"),
    21: (G, "plano general", "C3 señala con el bolígrafo a otras mesas donde la gente mira sus celulares y luego pide"),
    22: (G, "primer plano", "C3 da vuelta a la servilleta; C1 y C2 la escuchan atentas"),
    23: (G, "plano general", "C3 señala el mostrador, donde los empleados organizan material promocional y bandejas"),
    24: (G, "plano medio", "C3 abre un cuaderno y traza tres columnas"),
    25: (G, "plano detalle y medio", "C3 toca cada columna con el bolígrafo; C1 y C2 toman notas"),
    26: (G, "plano medio en el mostrador", "las amigas están en la caja; un cajero con uniforme blanco y rojo y gorra roja las atiende con amabilidad; C2 lo comenta a sus amigas"),
    27: (G, "plano medio", "el cajero señala opciones del menú y las promociones; C2 asiente y elige"),
    28: (G, "plano general", "C3 nota en una mesa cercana a una creadora de contenido que graba su pollo con un aro de luz; se lo cuenta a sus amigas"),
    29: (G, "plano medio", "la creadora prueba el pollo, sonríe y levanta el pulgar a su celular; C3 sigue explicando, divertida"),
    30: (P, "plano medio junto al ventanal", "C1 mira por el ventanal; afuera esperan domiciliarios en moto con chaquetas genéricas, sin marca"),
    31: (G, "plano general", "C1 señala la puerta, por donde entran clientes a comprar; otra persona hace un pedido en su celular"),
    32: (G, "plano medio", "un cliente recoge en el mostrador un pedido que hizo desde la aplicación"),
    33: (G, "plano general", "C1 señala a un domiciliario que recoge una bolsa en el punto de entrega y sale en su moto"),
    34: (G, "plano cenital de la mesa", "C1 esparce papas fritas por toda la bandeja como un mapa, muchas en todas partes"),
    35: (G, "plano cenital y medio", "C1 retira casi todas las papas y deja unas pocas, luego solo una; sus amigas se ríen"),
    36: (G, "plano medio", "C1 vuelve a esparcir las papas por toda la bandeja, convencida"),
    37: (G, "primer plano", "C1 hace un gesto de 'depende' con la mano; C2 y C3 asienten"),
    38: (G, "plano general", "C3 observa cómo la administradora del local recibe a un proveedor con cajas y se saludan"),
    39: (G, "plano medio", "la administradora y el proveedor revisan una tableta y unos papeles, y firman"),
    40: (G, "plano medio de la cocina abierta", "una empleada revisa el inventario y un temporizador; se empaca un pedido en una bolsa"),
    41: (G, "plano medio", "un cliente recibe su pedido y sonríe satisfecho; C3 termina la idea mirando a sus amigas"),
    42: (G, "plano medio", "un empleado llega con una gran bandeja de pollo a su mesa; C1 se pone de pie emocionada"),
    43: (P, "plano medio", "C1 presenta la idea con los brazos abiertos, mirando a sus amigas y luego a cámara"),
    44: (G, "plano medio", "las tres comparten el pollo, se ríen y se cuentan historias mientras C1 habla"),
    45: (G, "plano medio", "C2 levanta su celular para grabar un video selfie de las tres con el pollo"),
    46: (G, "primer plano", "las tres hacen la pose del reto ante el celular y se ríen al verse"),
    47: (G, "plano medio", "C2 levanta una caja de combo hacia la cámara con una sonrisa cómplice"),
    48: (G, "plano medio", "C3 muestra su cuaderno con tres dibujos sencillos (una cámara, un megáfono, un volante), sin texto legible"),
    49: (G, "plano sobre el hombro", "al celular de C3 le llegan corazones y notificaciones (sin números); ella se sorprende"),
    50: (G, "primer plano de reacciones", "las tres miran el celular emocionadas"),
    51: (G, "plano medio", "C3 cierra el cuaderno, satisfecha, y mira a sus amigas"),
    52: (G, "plano medio", "C1, C2, C3 y C4 brindan con sus vasos y dicen el eslogan juntas a cámara (C4 sonríe sin hablar)"),
    53: (P, "primer plano, luz de atardecer", "C1 habla mirando a sus amigas, con una presa en la mano"),
    54: (G, "primer plano", "C2 habla con calidez; al fondo un domiciliario sale con un pedido"),
    55: (G, "primer plano", "C3 sonríe mirando a todas alrededor de la mesa"),
    56: (G, "plano medio que se abre a plano general", "las cuatro levantan una presa de pollo y ríen; la cámara se aleja y muestra el restaurante lleno"),
}

# clips de acción sin diálogo, antes del bloque indicado
SIN_DIALOGO = {
    52: (G, "plano medio", 9.0, "C4 entra sola al restaurante con una bandeja, busca dónde sentarse y se queda de pie, un poco triste; C2 la ve, la saluda con la mano y le hace espacio; C3 le ofrece una presa de pollo; C4 sonríe emocionada y se sienta con ellas"),
}
