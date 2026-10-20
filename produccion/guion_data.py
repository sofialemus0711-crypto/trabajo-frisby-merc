"""Guion literal de "Frisby: El sabor de compartir".

Fuente única de verdad: el animatic, los subtítulos (.srt) y el paquete de
prompts por clip se generan a partir de estos datos, así que el texto hablado
es idéntico en todos los entregables. NO editar los diálogos: son literales.

Cada intervención es un párrafo: (quien, texto, visual, apoyo).
  quien  -> "C1", "C2", "C3" o "TODAS"
  visual -> qué muestra el animatic mientras se pronuncia el párrafo
  apoyo  -> imagen de apoyo / acción que debe verse en el video final
"""

TITULO = "Frisby: El sabor de compartir"

PERSONAJES = {
    "C1": {
        "rol": "Compañera 1 – Presentadora",
        "color": (200, 16, 46),
        "apariencia": (
            "mujer colombiana de unos 21 años, piel trigueña clara, cabello castaño "
            "oscuro, largo, liso y suelto con raya al lado; blusa blanca de botones "
            "y chaqueta roja ligera; pequeños aretes dorados; sonrisa amplia"
        ),
        "voz": "voz femenina media, cálida, segura y expresiva, acento colombiano (Bogotá) natural",
        "actitud": "segura, expresiva, amigable y profesional",
    },
    "C2": {
        "rol": "Compañera 2 – Clienta y encargada de promociones",
        "color": (232, 140, 0),
        "apariencia": (
            "mujer colombiana de unos 20 años, piel morena clara, cabello castaño "
            "claro rizado recogido en cola alta; camiseta amarilla mostaza y jean "
            "azul claro; pulsera de colores en la muñeca derecha"
        ),
        "voz": "voz femenina algo más aguda, enérgica y espontánea, acento colombiano (paisa suave) natural",
        "actitud": "espontánea, cercana y entusiasta",
    },
    "C3": {
        "rol": "Compañera 3 – Analista de marketing",
        "color": (110, 15, 35),
        "apariencia": (
            "mujer colombiana de unos 22 años, piel morena, cabello negro corto "
            "estilo bob a la altura de la mandíbula; gafas de montura delgada "
            "negra; blazer vino tinto sobre camiseta blanca"
        ),
        "voz": "voz femenina media-grave, clara, pausada y académica, acento colombiano (Bogotá) natural",
        "actitud": "clara, segura y académicamente convincente",
    },
    "TODAS": {
        "rol": "Las tres juntas",
        "color": (40, 40, 40),
    },
}

A = "assets/"

# Diagramas que dibuja el animatic (ver generar_animatic.py)
D = lambda nombre, resaltar=None: ("diagrama", nombre, resaltar)
I = lambda archivo, pie="": ("imagen", A + archivo, pie)

ESCENAS = [
    {
        "num": 1,
        "titulo": "Introducción",
        "objetivo": "Presentar la marca Frisby y despertar el interés del espectador.",
        "ambientacion": (
            "Espacio acogedor con una mesa preparada para compartir una comida. Pollo "
            "apanado dorado y crujiente con arepas, papas y gaseosas. Ambiente juvenil, "
            "luz cálida de tarde."
        ),
        "planos": [
            "Primer plano del pollo apanado y sus acompañamientos.",
            "Compañera 2 observa la comida y expresa antojo de forma espontánea.",
            "Compañera 1 presenta la marca directamente a cámara (plano medio).",
            "Insertos de una comida compartida entre amigos y familiares.",
            "Cierre con la presentadora mirando a cámara, preparando la transición.",
        ],
        "parrafos": [
            ("C2", "¡Uy, qué hambre! ¿A quién no se le antoja un pollo delicioso para compartir con sus amigas?",
             I("menu_pollo_apanado.jpg", "Pollo apanado para compartir"),
             "Primer plano del pollo apanado; la compañera 2 lo mira con antojo y sonríe."),
            ("C1", "Hay sabores que no solo quitan el hambre, sino que también crean momentos inolvidables. Y cuando pensamos en compartir algo delicioso, Frisby es una marca que muchos colombianos reconocen.",
             I("logo_mascota.jpg", "Frisby"),
             "La compañera 1 habla a cámara; insertos de amigos y familia compartiendo una comida."),
            ("C1", "Su pollo apanado y sus diferentes combos que son perfectos para disfrutar con amigos y con familia.",
             I("menu_combos.jpg", "Pollo apanado y combos"),
             "Planos detalle de combos servidos en la mesa."),
            ("C1", "Pero ¿qué hay detrás de una marca tan reconocida?",
             I("restaurante.jpg", "¿Qué hay detrás de la marca?"),
             "Plano medio de la compañera 1, gesto de intriga."),
            ("C1", "Hoy te mostraremos cómo se promociona, cómo llega a sus clientes y cómo crearíamos una nueva campaña para ella.",
             D("agenda"),
             "La compañera 1 mira a cámara; transición hacia la explicación del marketing."),
        ],
    },
    {
        "num": 2,
        "titulo": "Mezcla de promoción",
        "objetivo": "Explicar las herramientas de promoción que puede utilizar Frisby.",
        "ambientacion": (
            "Escenario moderno con una mesa, un teléfono móvil y recursos gráficos de "
            "publicidad, promociones, relaciones públicas y marketing directo."
        ),
        "planos": [
            "Compañera 1 explica la publicidad; ejemplos de publicaciones gastronómicas y videos.",
            "Compañera 2 explica promociones de ventas y relaciones públicas; combos ilustrativos y conexión con la comunidad.",
            "Compañera 3 explica el marketing directo; sitio web de pedidos y comunicaciones digitales genéricas.",
            "Compañera 1 concluye con la función de cada herramienta.",
            "Compañera 2, como clienta, toma el teléfono, revisa el menú, elige un combo y pide.",
        ],
        "parrafos": [
            ("C1", "Para dar a conocer sus productos, Frisby puede utilizar diferentes herramientas de promoción. Una de ellas es la publicidad, mediante anuncios en redes sociales, videos e imágenes que despiertan el deseo de comprar.",
             D("mezcla", 0),
             "Publicaciones gastronómicas genéricas en redes sociales, videos cortos de producto."),
            ("C2", "También están las promociones de ventas, como combos y descuentos durante determinadas temporadas, que incentivan la compra.",
             I("menu_promociones.jpg", "Promociones de ventas"),
             "Combos promocionales ilustrativos (sin cifras inventadas)."),
            ("C2", "Otra herramienta son las relaciones públicas, que ayudan a fortalecer la imagen de la empresa y su relación con la comunidad.",
             I("menu_solidario.jpg", "Relaciones públicas y comunidad"),
             "Actividades de conexión con la comunidad (por ejemplo, una iniciativa solidaria)."),
            ("C3", "Además, el marketing directo permite comunicarse con los consumidores a través de canales digitales, como su página web y sus comunicaciones promocionales, para dar a conocer productos y ofertas.",
             I("menu_frisdelicias.jpg", "Marketing directo: página web y comunicaciones"),
             "Sitio web de pedidos en un portátil y un correo promocional genérico en el móvil."),
            ("C1", "¡Exactamente! Cada herramienta cumple una función: informar, despertar el interés, incentivar la compra y fortalecer la relación con los consumidores.",
             D("mezcla", "todas"),
             "La compañera 1 asiente y enumera con los dedos."),
            ("C2", "¡Miren esto! Puedo revisar el menú, elegir mi combo y pedirlo sin salir de casa. ¡Se me antojó comer en Frisby!",
             I("menu_combos.jpg", "Pedido desde casa"),
             "La compañera 2, como clienta, desliza el menú en el teléfono, elige un combo y toca \"pedir\"."),
        ],
    },
    {
        "num": 3,
        "titulo": "Estrategias de promoción y presupuesto",
        "objetivo": "Explicar la estrategia de atracción, la de empuje y el presupuesto por objetivos y tareas.",
        "ambientacion": "Espacio de presentación con mesa y un tablero o pantalla para conceptos de marketing.",
        "planos": [
            "Compañera 3 en plano medio explica la estrategia de atracción.",
            "Consumidores que descubren productos en publicidad y redes sociales.",
            "Estrategia de empuje: punto de venta y personal organizando productos y promociones.",
            "Presupuesto: tablero con tres etapas (objetivos, actividades, costos) sin cifras.",
            "Cierre con la compañera 3 frente al tablero.",
        ],
        "parrafos": [
            ("C3", "En cuanto a las estrategias de promoción, encontramos la estrategia de atracción, que busca despertar el interés del consumidor mediante publicidad y redes sociales.",
             D("estrategias", 0),
             "Consumidores descubriendo productos en el teléfono."),
            ("C3", "También está la estrategia de empuje, que busca incentivar a los puntos de venta y a los intermediarios para que impulsen los productos.",
             D("estrategias", 1),
             "Punto de venta; personal organizando productos y material promocional."),
            ("C3", "Para nuestra campaña, utilizaríamos el método de presupuesto por objetivos y tareas. Primero definimos qué queremos lograr, después las actividades necesarias y finalmente cuánto costaría cada una.",
             D("presupuesto"),
             "La compañera 3 frente al tablero con las tres etapas."),
        ],
    },
    {
        "num": 4,
        "titulo": "Fuerza de ventas e influenciadores",
        "objetivo": "Mostrar la importancia del personal de ventas y de los creadores de contenido gastronómico.",
        "ambientacion": "Punto de venta gastronómico y espacio de grabación de contenido para redes sociales.",
        "planos": [
            "Compañera 2 como integrante de la fuerza de ventas orienta a un cliente (sin diálogos añadidos).",
            "Compañera 3 explica la propuesta de creadores de contenido.",
            "Un creador graba un video corto del pollo con su teléfono.",
            "Pantalla de teléfono con una publicación gastronómica genérica.",
            "Regreso a la compañera 3 para terminar.",
        ],
        "parrafos": [
            ("C2", "La fuerza de ventas es importante porque orienta al cliente, explica las opciones del menú y comunica las promociones vigentes.",
             I("uniformes.jpg", "Fuerza de ventas"),
             "La compañera 2, con delantal rojo sin logotipo, señala el menú a un cliente."),
            ("C3", "También proponemos trabajar con creadores de contenido gastronómico que prueben los productos y compartan su experiencia en redes sociales. Mediante videos cortos y recomendaciones auténticas, podrían atraer nuevos clientes y aumentar el reconocimiento de la marca.",
             D("influenciadores"),
             "Un creador graba el pollo con su teléfono; publicación genérica en pantalla."),
        ],
    },
    {
        "num": 5,
        "titulo": "Canales de distribución",
        "objetivo": "Explicar los canales directo e indirecto y los tipos de cobertura de distribución.",
        "ambientacion": "Restaurante, teléfono móvil, página web y representaciones de servicios de domicilio.",
        "planos": [
            "Compañera 1 presenta el tema a cámara.",
            "Canal directo: compra en restaurante y en página web / aplicación.",
            "Canal indirecto: plataforma de domicilios genérica como intermediario.",
            "Cobertura: intensiva (amplia), selectiva (puntos escogidos), exclusiva (establecimientos determinados).",
            "Cierre: consumidores accediendo por los canales disponibles.",
        ],
        "parrafos": [
            ("C1", "Ahora hablemos de cómo llega Frisby a sus consumidores. Primero tenemos el canal directo, cuando el cliente compra a través de los restaurantes, la página web o la aplicación de la marca.",
             D("canales", 0),
             "Persona comprando en el restaurante; otra pidiendo en la web o aplicación."),
            ("C1", "También está el canal indirecto, cuando intervienen terceros, como las plataformas de domicilios.",
             D("canales", 1),
             "Plataforma de domicilios genérica conectando consumidor y restaurante."),
            ("C1", "En cuanto a la cobertura, la distribución intensiva busca llegar a muchos consumidores; la selectiva utiliza puntos elegidos estratégicamente, y la exclusiva limita la distribución a determinados establecimientos.",
             D("cobertura", None),
             "Infografía: muchos puntos / pocos puntos elegidos / un punto exclusivo."),
            ("C1", "Para Frisby, proponemos una cobertura amplia ya que es una marca muy reconocida, esto dependiendo de la disponibilidad de sus restaurantes y domicilios.",
             D("cobertura", "propuesta"),
             "Consumidores accediendo al producto por los canales disponibles."),
        ],
    },
    {
        "num": 6,
        "titulo": "Administración del canal",
        "objetivo": "Presentar los elementos necesarios para administrar correctamente los canales de distribución.",
        "ambientacion": "Espacio de trabajo con computadora, documentos, inventario y operación logística.",
        "planos": [
            "Compañera 3 habla a cámara.",
            "Selección de aliados: reunión profesional entre representantes comerciales.",
            "Territorios de venta: mapa comercial ilustrativo.",
            "Precios, cobros y pagos: documentos genéricos sin cifras.",
            "Inventarios: productos organizados y persona verificando existencias.",
            "Tiempos de entrega: pedido preparado para despacho; cliente satisfecho recibiéndolo.",
        ],
        "parrafos": [
            ("C3", "Para administrar correctamente los canales de distribución, es importante seleccionar aliados confiables, organizar los territorios de venta y establecer políticas claras de precios, cobros y pagos.",
             D("administracion", (0, 1, 2)),
             "Reunión comercial, mapa ilustrativo, documentos administrativos genéricos."),
            ("C3", "También se deben supervisar los inventarios, los tiempos de entrega y la satisfacción del cliente. De esta manera, podemos mejorar el servicio y garantizar una buena experiencia de compra.",
             D("administracion", (3, 4, 5)),
             "Inventario, pedido listo para despacho, cliente satisfecho recibiendo su pedido."),
        ],
    },
    {
        "num": 7,
        "titulo": "Nuestra nueva campaña: “Frisby nos une”",
        "objetivo": "Presentar la propuesta creativa, cómo se ejecutaría, cómo se distribuiría y cómo se evaluaría.",
        "ambientacion": (
            "Espacio cálido, juvenil y acogedor. Las tres juntas con una mesa, pollo apanado, "
            "acompañamientos, un cartel de presupuesto y un teléfono móvil."
        ),
        "planos": [
            "Mientras la compañera 1 presenta, las compañeras 2 y 3 preparan la mesa.",
            "Compañera 1 presenta “Frisby nos une” a cámara.",
            "Compañera 2 muestra el reto en redes con su teléfono; personas compartiendo momentos.",
            "Compañera 3 muestra el cartel: creación de contenido, publicidad en redes, materiales promocionales.",
            "Medición: indicadores visuales (visualizaciones, compartidos, pedidos, participación) sin números.",
            "Las tres comparten el producto, miran a cámara y dicen el eslogan juntas.",
        ],
        "parrafos": [
            ("C1", "¡Y llegó el momento de presentar nuestra propuesta! Se llama Frisby nos une, una campaña pensada para jóvenes, amigos y familias, porque creemos que compartir un buen pollo también es compartir risas, historias y momentos inolvidables.",
             D("campana"),
             "C1 a cámara; detrás, C2 y C3 preparan la mesa con pollo y acompañamientos."),
            ("C2", "¿Cómo lo haremos? A través de videos creativos y divertidos en redes sociales, fotografías de nuestros combos favoritos y un reto en el que las personas compartan sus mejores momentos disfrutando de Frisby.",
             D("reto"),
             "C2 muestra en su teléfono un feed de videos de personas compartiendo pollo."),
            ("C2", "Además, proponemos promociones especiales en combos seleccionados para motivar a más personas a participar.",
             I("menu_promociones.jpg", "Promociones especiales en combos seleccionados"),
             "Combos seleccionados destacados (sin precios inventados)."),
            ("C3", "Para hacer realidad esta campaña, invertiríamos en la creación de contenido, publicidad en redes sociales y materiales promocionales.",
             D("presupuesto_campana"),
             "C3 levanta un cartel con las tres categorías de presupuesto."),
            ("C3", "Después, mediríamos los resultados teniendo en cuenta cuántas personas vieron y compartieron los videos, cuántos pedidos se generaron y qué tanta participación tuvo el público. Así sabremos si nuestra campaña logró conectar con los consumidores.",
             D("medicion"),
             "Iconos de visualizaciones, compartidos, pedidos y participación, sin cifras."),
            ("TODAS", "¡Frisby nos une, porque los mejores momentos saben mejor cuando se comparten!",
             D("eslogan_une"),
             "Las tres comparten el pollo, miran a cámara y dicen el eslogan al unísono."),
        ],
    },
    {
        "num": 8,
        "titulo": "Cierre",
        "objetivo": "Cerrar con un mensaje emotivo que una a Frisby, el servicio y los momentos compartidos.",
        "ambientacion": "Mesa con el producto presentado de forma apetitosa; las tres juntas, ambiente cálido.",
        "planos": [
            "C1 dice su frase; inserto de una promoción que despierta el antojo.",
            "C2 dice su frase; inserto de un pedido preparado o entregado.",
            "C3 dice su frase; inserto de un momento compartido en la mesa.",
            "Plano general de las tres; muestran el producto y dicen el eslogan final.",
            "Mantener el plano final unos segundos; logotipo oficial insertado en edición.",
        ],
        "parrafos": [
            ("C1", "En Frisby, todo comienza con una promoción que despierta el antojo.",
             I("menu_promociones.jpg", "Una promoción que despierta el antojo"),
             "Inserto: una promoción en pantalla que despierta el antojo."),
            ("C2", "Continúa con un servicio que lleva nuestro sabor hasta donde estés.",
             I("restaurante.jpg", "Un servicio que lleva el sabor hasta donde estés"),
             "Inserto: un pedido preparado y entregado."),
            ("C3", "Y termina con momentos que siempre queremos repetir.",
             I("menu_pollo_apanado.jpg", "Momentos que queremos repetir"),
             "Inserto: amigos compartiendo alrededor de la mesa."),
            ("TODAS", "¡Frisby, mucho más que pollo… ¡momentos para compartir!",
             D("final"),
             "Plano general de las tres sonriendo y mostrando el producto."),
        ],
    },
]
