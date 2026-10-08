import type { ServiceLandingText } from "./serviceLandings";

// İspanyolca hizmet açılış sayfaları (/es/<slug>/). Anahtar: Türkçe kaydın slug'ı.
// Uyarlama kuralları İngilizceyle aynı (bkz. serviceLandings.en.ts). Hitap "usted";
// terimler sitenin öbür İspanyolca sayfalarıyla aynı (colegio, caseta eléctrica,
// Ayuntamiento Metropolitano de Esmirna). Slug'larda aksan yok.

export const es: Record<string, ServiceLandingText> = {
  "okul-duvar-resmi": {
    slug: "murales-para-colegios",
    name: "Murales para colegios",
    title: "Murales para colegios: patios, pasillos y aulas | Çizgi Artizm",
    description:
      "Murales educativos y coloridos para patios, pasillos, aulas de infantil y comedores escolares. Proyectos en todo el mundo y presupuesto gratuito.",
    label: "Para colegios",
    h1: "Murales para colegios",
    watermark: "COLEGIO",
    lead:
      "Convertimos patios, pasillos y aulas en espacios que los alumnos disfrutan mirando cada día: espacios que enseñan e inspiran.",
    cardText: "Murales educativos y coloridos para patios, pasillos y aulas de infantil.",
    introTitle: "¿Por qué importan las paredes del colegio?",
    intro: [
      "Los alumnos pasan gran parte del día en el colegio. Con el diseño adecuado, una pared gris del patio o un pasillo vacío se convierte en una superficie que transmite la identidad del centro, despierta la curiosidad y favorece el aprendizaje.",
      "Preparamos el diseño junto con la dirección y el profesorado, según la edad de los alumnos y los valores del centro. Cualquier tema es posible: desde personajes de cuento hasta la ciencia, desde la historia y la cultura hasta la naturaleza y los animales.",
    ],
    pointsTitle: "Dónde pintamos en los colegios",
    points: [
      { t: "Patios y muros perimetrales", d: "Composiciones grandes, coloridas y con historia en los espacios donde los alumnos pasan el recreo." },
      { t: "Pasillos y escaleras", d: "Diseños que diferencian las plantas por color y tema y ayudan a orientarse dentro del edificio." },
      { t: "Aulas de infantil y zonas de juego", d: "Personajes simpáticos y figuras educativas adaptados a los más pequeños." },
      { t: "Biblioteca, comedor y gimnasio", d: "Temas que reflejan la función de cada espacio, en armonía con la identidad del centro." },
      { t: "Materiales adecuados para colegios", d: "En interiores, acrílicos al agua de bajo olor; en exteriores, pinturas resistentes a los rayos UV y a la intemperie." },
    ],
    worksTitle: "Algunos de nuestros trabajos pensados para niños",
    process: [
      { t: "Elección del tema", d: "Recorremos las paredes con la dirección del centro y elegimos un tema adecuado a la edad de los alumnos y a los valores del colegio." },
      { t: "Boceto y aprobación", d: "Preparamos un boceto en color con las medidas reales de la pared y lo ajustamos hasta que cuente con su aprobación." },
      { t: "Pintura según su calendario", d: "Planificamos juntos los días de trabajo para no interrumpir las clases; los fines de semana y las vacaciones escolares son ideales para ello." },
      { t: "Entrega", d: "Dejamos la zona limpia, revisamos la pared con ustedes y entregamos el trabajo terminado." },
    ],
    faq: [
      {
        q: "¿Las pinturas que usan son adecuadas para los alumnos?",
        a: "En interiores usamos pinturas acrílicas al agua de bajo olor, y en exteriores, pinturas resistentes a los rayos UV y a la intemperie. Definimos los materiales de cada pared durante la valoración, según su ubicación.",
      },
      {
        q: "¿Quién decide el diseño?",
        a: "El diseño se decide junto con el colegio. Escuchamos sus ideas y las necesidades del centro y preparamos un boceto a medida; no empezamos a pintar sin su aprobación.",
      },
      {
        q: "¿Se interrumpen las clases durante el trabajo?",
        a: "Planificamos los días de trabajo con la dirección del centro. En zonas como el patio o los pasillos, el trabajo puede hacerse fuera del horario lectivo, en fin de semana o durante las vacaciones.",
      },
      {
        q: "¿Cómo se calcula el precio de un mural escolar?",
        a: "El precio se calcula por metro cuadrado y depende del tamaño de la pared, del estado de la superficie y del nivel de detalle del diseño. Envíenos una foto de la pared y sus medidas aproximadas y le prepararemos un presupuesto gratuito.",
      },
      {
        q: "¿En qué países trabajan?",
        a: "Trabajamos en todo el mundo. Hacemos la primera valoración a distancia con las fotos y medidas que nos envíe y, cuando hace falta, visitamos el lugar.",
      },
    ],
    whatsappText:
      "Hola, me gustaría pedir presupuesto para un mural en nuestro colegio. Les envío una foto de la pared y sus medidas aproximadas.",
  },
  "fabrika-duvar-resmi": {
    slug: "murales-para-fabricas",
    name: "Murales para fábricas",
    title: "Murales para fábricas e instalaciones industriales | Çizgi Artizm",
    description:
      "Murales de gran formato que reflejan su marca en fachadas de fábricas, muros perimetrales y comedores de empresa. Trabajo con andamios y grúas; presupuesto gratuito.",
    label: "Para fábricas",
    h1: "Murales para fábricas",
    watermark: "FÁBRICA",
    lead:
      "Convertimos fachadas de fábricas, muros perimetrales y zonas de trabajo en obras de gran formato que cuentan la historia de su marca y se ven desde lejos.",
    cardText: "Obras de gran formato en fachadas, muros y comedores que transmiten la identidad de su marca.",
    introTitle: "Dé identidad a su edificio industrial",
    intro: [
      "Los edificios industriales suelen ser superficies amplias, lisas y de un solo color. Por eso son el lienzo ideal para una firma de marca que recuerda quien pasa por delante.",
      "Llevamos al diseño su logotipo, sus productos, la historia de su empresa o los símbolos de su ciudad. En interiores, pintamos comedores, zonas de descanso y pasillos para alegrar el día a sus empleados.",
    ],
    pointsTitle: "Qué hacemos en fábricas",
    points: [
      { t: "Fachadas y muros perimetrales", d: "Composiciones de gran formato sobre su marca o su ciudad en superficies visibles desde la carretera." },
      { t: "Logotipos y rotulación", d: "Su logotipo y su eslogan trasladados a la pared a escala, nítidos y duraderos." },
      { t: "Comedores y zonas sociales", d: "Murales interiores que llenan de energía los espacios donde los empleados pasan su tiempo." },
      { t: "Trabajos en altura", d: "Realizamos todo el trabajo con nuestro propio equipo, incluidos grúas, andamios y trabajos en altura." },
    ],
    worksTitle: "Algunos de nuestros trabajos de gran formato",
    process: [
      { t: "Visita y medición", d: "Valoramos las dimensiones de la fachada, el estado de la superficie y si se necesitan andamios o grúa." },
      { t: "Diseño acorde con su marca", d: "Preparamos un boceto con sus colores e identidad corporativa y lo sometemos a su aprobación." },
      { t: "Preparación y pintura", d: "Retiramos el revoque suelto, aplicamos imprimación y trasladamos el diseño a escala con proyector o con el método de cuadrícula." },
      { t: "Protección y entrega", d: "En las superficies adecuadas terminamos el trabajo con un barniz protector y lo entregamos." },
    ],
    faq: [
      {
        q: "¿Se puede pintar con la fábrica en funcionamiento?",
        a: "Sí. Planificamos con ustedes la zona de trabajo para no interrumpir la producción ni los envíos, y decidimos la ubicación de andamios y grúa durante la visita.",
      },
      {
        q: "¿Cuánto se tarda en pintar una fachada grande?",
        a: "Depende del tamaño de la superficie, del nivel de detalle, del tiempo y del medio de acceso. Junto con el presupuesto le facilitamos un calendario estimado.",
      },
      {
        q: "¿Cuánto dura la pintura en una fachada exterior?",
        a: "En exteriores usamos pinturas acrílicas y en spray resistentes a los rayos UV y a la intemperie, y en las superficies adecuadas un barniz protector alarga la vida de la obra. Sobre una superficie bien preparada, un mural conserva su viveza durante muchos años.",
      },
      {
        q: "¿Pueden reproducir nuestro logotipo exactamente?",
        a: "Sí. Tomamos su logotipo y sus códigos de color corporativos, los escalamos a la pared y los pintamos con líneas limpias.",
      },
      {
        q: "¿Qué debo enviar para pedir presupuesto?",
        a: "Unas cuantas fotos de la fachada tomadas de frente, su ancho y alto aproximados, y la ciudad y el país donde están las instalaciones bastan para un primer presupuesto.",
      },
    ],
    whatsappText:
      "Hola, me gustaría pedir presupuesto para un mural en nuestra fábrica. Les envío una foto de la fachada y sus medidas aproximadas.",
  },
  "kafe-restoran-duvar-resmi": {
    slug: "murales-para-cafeterias-y-restaurantes",
    name: "Murales para cafeterías y restaurantes",
    title: "Murales para cafeterías y restaurantes | Çizgi Artizm",
    description:
      "Murales a medida para cafeterías, restaurantes y quioscos que sus clientes querrán fotografiar. Vea nuestros trabajos para Bubbles Cafe y RAU Cafe y pida presupuesto.",
    label: "Para cafeterías y restaurantes",
    h1: "Murales para cafeterías y restaurantes",
    watermark: "CAFÉ",
    lead:
      "Diseñamos y pintamos murales a la medida de su concepto: murales que sus clientes fotografían y comparten, y que hacen que recuerden su local.",
    cardText: "Paredes interiores y exteriores con concepto propio que los clientes fotografían.",
    introTitle: "Que sus paredes hablen tanto como su carta",
    intro: [
      "Las paredes son de lo primero que define el ambiente de una cafetería o un restaurante. Un mural bien diseñado transmite su estilo de un vistazo y se convierte en un rincón que los clientes comparten en redes sociales.",
      "Diseñamos a partir del nombre de su local, su carta, su concepto y su clientela. Retratos, tipografía, personajes o composiciones abstractas: trabajamos en cualquier superficie, del interior a la fachada.",
    ],
    pointsTitle: "Qué hacemos en cafeterías y restaurantes",
    points: [
      { t: "Rincón para fotos", d: "Paredes llamativas con el nombre de su local, donde los clientes se paran a hacerse fotos." },
      { t: "Paredes de concepto", d: "Composiciones sobre el café, la cultura gastronómica, su ciudad o una historia totalmente suya." },
      { t: "Fachada y entrada", d: "El nombre y el logotipo de su local llevados a la fachada con un toque artístico que se ve desde la calle." },
      { t: "Pintura de quioscos", d: "Quioscos de parques y pequeños puntos de venta pintados de arriba abajo y convertidos en marca." },
    ],
    worksTitle: "Algunos de nuestros trabajos en cafeterías y restaurantes",
    process: [
      { t: "Escuchar su concepto", d: "Hablamos de su estilo, su carta y su clientela, y definimos la historia que contará la pared." },
      { t: "Boceto", d: "Preparamos un boceto con colores que encajen con la luz y el mobiliario de su local, y obtenemos su aprobación." },
      { t: "Pintura", d: "Planificamos con ustedes el horario de trabajo según el ritmo de su negocio." },
      { t: "Listo para las fotos", d: "Dejamos la zona limpia y entregamos la pared lista para recibir a sus clientes." },
    ],
    faq: [
      {
        q: "¿Trabajan con el local cerrado?",
        a: "Planificamos el horario con ustedes. Podemos trabajar cuando el local está cerrado o en los días de menos afluencia.",
      },
      {
        q: "¿Molestará el olor de la pintura a los clientes?",
        a: "En interiores usamos pinturas acrílicas al agua de bajo olor, así que el local vuelve a la normalidad poco después de pintar.",
      },
      {
        q: "¿Aguanta un mural en una zona de mucho uso?",
        a: "En las superficies que hay que limpiar a menudo aplicamos un barniz protector sobre el mural para que sea lavable y duradero.",
      },
      {
        q: "¿Pueden incluir nuestro logotipo y el nombre del local?",
        a: "Sí. Podemos integrar en el diseño su logotipo, el nombre de su local o algún elemento de su carta para que la pared forme parte de su marca.",
      },
      {
        q: "¿Cómo se fija el precio?",
        a: "Depende de los metros cuadrados de la pared, del nivel de detalle del diseño y de si es interior o exterior. Envíenos una foto de la pared y sus medidas y le prepararemos un presupuesto gratuito.",
      },
    ],
    whatsappText:
      "Hola, me gustaría pedir presupuesto para un mural en nuestro local. Les envío una foto de la pared y sus medidas aproximadas.",
  },
  "avm-duvar-resmi": {
    slug: "murales-para-centros-comerciales",
    name: "Murales para centros comerciales",
    title: "Murales para centros comerciales | Çizgi Artizm",
    description:
      "Murales llamativos y fotogénicos para zonas comunes, zonas infantiles y aparcamientos de centros comerciales. Presupuesto gratuito.",
    label: "Para centros comerciales",
    h1: "Murales para centros comerciales",
    watermark: "CENTRO",
    lead:
      "Damos identidad a su centro comercial con murales que llaman la atención, orientan a los visitantes y se fotografían en las zonas de más afluencia.",
    cardText: "Obras de gran formato para zonas comunes, zonas infantiles y aparcamientos.",
    introTitle: "Paredes que destacan entre la multitud",
    intro: [
      "Cada día, miles de personas recorren los mismos pasillos de un centro comercial. Un mural en el lugar y a la escala adecuados se convierte en un punto donde los visitantes se detienen, se hacen fotos y quedan para encontrarse.",
      "Diseñamos según el concepto general del centro, sus zonas infantiles o sus eventos de temporada. Trabajamos en todo tipo de superficies, desde las zonas comunes hasta las plantas del aparcamiento.",
    ],
    pointsTitle: "Dónde pintamos en centros comerciales",
    points: [
      { t: "Zonas comunes y pasillos", d: "Grandes composiciones que reciben a los visitantes y transmiten el concepto del centro." },
      { t: "Zonas infantiles", d: "Paredes coloridas con personajes e historias pensadas para los niños." },
      { t: "Aparcamiento y señalización", d: "Referencias fáciles de recordar que diferencian plantas y zonas con colores y figuras." },
      { t: "Paredes para eventos y campañas", d: "Diseños para eventos de temporada, pensados como rincones para fotos." },
    ],
    worksTitle: "Algunos de nuestros trabajos en centros comerciales e interiores concurridos",
    process: [
      { t: "Análisis del espacio", d: "Valoramos juntos el flujo de visitantes, los puntos de vista y la distancia desde la que se verá la pared." },
      { t: "Concepto y boceto", d: "Preparamos un diseño acorde con la identidad y el público del centro y lo presentamos a la gerencia para su aprobación." },
      { t: "Ejecución segura", d: "Delimitamos la zona de trabajo por la seguridad de los visitantes y pintamos en el horario acordado con la gerencia." },
      { t: "Entrega", d: "Dejamos la zona limpia y revisamos el trabajo con la gerencia antes de entregarlo." },
    ],
    faq: [
      {
        q: "¿Pueden trabajar con el centro abierto?",
        a: "Fijamos el horario de trabajo con la gerencia del centro. Si es necesario, trabajamos después del cierre o a primera hora de la mañana, y delimitamos la zona por la seguridad de los visitantes.",
      },
      {
        q: "¿Trabajan en zonas con techos altos?",
        a: "Sí. Nuestro propio equipo realiza los trabajos que requieren andamios y trabajo en altura; determinamos el medio de acceso durante la visita.",
      },
      {
        q: "¿Respetará el diseño nuestro manual de identidad corporativa?",
        a: "Diseñamos según las normas de color y tipografía de su manual de marca y no empezamos a pintar sin la aprobación de la gerencia.",
      },
      {
        q: "¿También hacen murales para eventos de temporada?",
        a: "Sí. También diseñamos para eventos y campañas de temporada; elegimos juntos la superficie y los materiales según el tiempo que vaya a permanecer el mural.",
      },
      {
        q: "¿Qué información necesitan para el presupuesto?",
        a: "Una foto de la zona, sus medidas aproximadas, la ciudad y el país donde está el centro y, si la tiene, su idea de concepto bastan para un primer presupuesto.",
      },
    ],
    whatsappText:
      "Hola, me gustaría pedir presupuesto para un mural en nuestro centro comercial. Les envío una foto de la zona y sus medidas aproximadas.",
  },
  "ofis-duvar-resmi": {
    slug: "murales-para-oficinas",
    name: "Murales para oficinas",
    title: "Murales para oficinas y arte corporativo | Çizgi Artizm",
    description:
      "Murales que reflejan la cultura de su empresa en oficinas, salas de reuniones y espacios de trabajo compartidos. Diseños a medida con su logotipo, eslogan y colores de marca; presupuesto gratuito.",
    label: "Para oficinas",
    h1: "Murales para oficinas",
    watermark: "OFICINA",
    lead:
      "Llevamos a las paredes la cultura, los valores y la marca de su empresa para crear una oficina que empleados y visitas recuerden.",
    cardText: "Paredes de salas de reuniones y zonas comunes que reflejan su cultura y su marca.",
    introTitle: "Que su marca también se vea en su oficina",
    intro: [
      "Las paredes de una oficina son lo primero que cuenta quién es una empresa. Un logotipo en la recepción, una composición que transmite sus valores en la sala de reuniones o una pared colorida que da energía en la cocina cambian el ambiente de trabajo.",
      "Diseñamos con sus colores de marca, su eslogan y el lenguaje de su equipo. Trabajamos de forma limpia y ordenada para alterar lo menos posible el día a día de su oficina.",
    ],
    pointsTitle: "Qué hacemos en oficinas",
    points: [
      { t: "Recepción y entrada", d: "Diseños que reciben a las visitas y destacan su logotipo y su identidad de marca." },
      { t: "Salas de reuniones", d: "Composiciones que transmiten los valores, la visión o el sector de su empresa." },
      { t: "Zonas comunes y cocina", d: "Paredes coloridas que llenan de energía los espacios donde su equipo pasa el tiempo." },
      { t: "Paredes de tipografía y eslogan", d: "El eslogan de su empresa o frases motivadoras pintados con tipografía grafiti." },
    ],
    worksTitle: "Algunos de nuestros trabajos en oficinas y empresas",
    process: [
      { t: "Briefing", d: "Escuchamos lo que nos cuenta de su empresa, de su equipo y del mensaje que quiere que transmita la pared." },
      { t: "Boceto acorde con su marca", d: "Preparamos un boceto con sus colores y su tipografía corporativos y lo sometemos a su aprobación." },
      { t: "Ejecución planificada", d: "Programamos los días de trabajo para alterar lo menos posible su oficina, fuera del horario laboral si es necesario." },
      { t: "Entrega", d: "Dejamos la zona limpia y revisamos el trabajo con ustedes antes de entregarlo." },
    ],
    faq: [
      {
        q: "¿Pueden pintar con la oficina en funcionamiento?",
        a: "Planificamos los días de trabajo con ustedes. En espacios que se pueden cerrar, como las salas de reuniones, podemos trabajar en horario laboral; en las zonas abiertas, fuera de horario o en fin de semana.",
      },
      {
        q: "¿Afectará el olor de la pintura al trabajo?",
        a: "En interiores usamos pinturas acrílicas al agua de bajo olor, así que el espacio puede volver a usarse poco después.",
      },
      {
        q: "¿Pueden pintar nuestro logotipo en la pared?",
        a: "Sí. Tomamos su logotipo y sus códigos de color corporativos, los escalamos a la pared y los pintamos con líneas limpias. También creamos diseños que integran el logotipo en una composición artística.",
      },
      {
        q: "¿Pueden llevar el mismo concepto a nuestras oficinas en otras ciudades o países?",
        a: "Sí. Como trabajamos en todo el mundo, podemos llevar el mismo concepto a sus oficinas en distintos lugares, adaptándolo a cada espacio.",
      },
      {
        q: "¿Cómo pido presupuesto?",
        a: "Envíenos por WhatsApp una foto de la pared, sus medidas aproximadas y, si los tiene, su logotipo o su idea de diseño, y le prepararemos un presupuesto gratuito.",
      },
    ],
    whatsappText:
      "Hola, me gustaría pedir presupuesto para un mural en nuestra oficina. Les envío una foto de la pared y sus medidas aproximadas.",
  },
  "bina-cephe-duvar-resmi": {
    slug: "murales-en-fachadas",
    name: "Murales en fachadas",
    title: "Murales en fachadas de edificios y murales gigantes | Çizgi Artizm",
    description:
      "Murales gigantes en fachadas de edificios de viviendas, urbanizaciones y locales comerciales, con andamios y grúas. Pintura resistente a los rayos UV y a la intemperie; presupuesto gratuito por metro cuadrado.",
    label: "Para fachadas",
    h1: "Murales en fachadas",
    watermark: "FACHADA",
    lead:
      "Con andamios y grúas, convertimos fachadas de edificios de viviendas, urbanizaciones y locales comerciales en murales gigantes que se convierten en símbolo de la calle.",
    cardText: "Murales gigantes en fachadas de viviendas, urbanizaciones y comercios, con andamios y grúas.",
    introTitle: "Fachadas que se convierten en símbolo de la calle",
    intro: [
      "Una medianera vacía es uno de los lienzos más grandes de una ciudad. Un mural bien diseñado da identidad al edificio y lo convierte en un símbolo de la calle.",
      "En una fachada, el éxito depende tanto de la preparación y de los materiales adecuados como del diseño. Reparamos e imprimamos la superficie, trasladamos el diseño a escala y pintamos con pinturas resistentes a los rayos UV y a la intemperie.",
    ],
    pointsTitle: "Qué hacemos en fachadas",
    points: [
      { t: "Medianeras y muros ciegos", d: "Composiciones gigantes sobre la ciudad, la historia o la naturaleza en grandes superficies sin ventanas." },
      { t: "Entradas de urbanizaciones y edificios", d: "Muros de entrada y de jardín que los vecinos ven cada día." },
      { t: "Andamios y grúas", d: "Realizamos todo el trabajo con nuestro propio equipo, incluidos los trabajos en altura." },
      { t: "Preparación de la superficie", d: "Retirada del revoque suelto, reparación de daños e imprimación para lograr una base duradera." },
    ],
    worksTitle: "Algunos de nuestros trabajos en fachadas",
    process: [
      { t: "Visita", d: "Valoramos las dimensiones de la fachada, el estado de la superficie y si se necesitan andamios o grúa." },
      { t: "Diseño y aprobación", d: "Preparamos un boceto acorde con la arquitectura y el entorno del edificio y lo presentamos a la comunidad de propietarios o al propietario para su aprobación." },
      { t: "Preparación y escalado", d: "Reparamos e imprimamos la superficie y trasladamos el diseño a la pared con proyector o con el método de cuadrícula." },
      { t: "Pintura y protección", d: "Trabajamos por capas y, en las superficies adecuadas, aplicamos un barniz protector que alarga la vida de la obra." },
    ],
    faq: [
      {
        q: "¿Hace falta autorización para pintar un mural en la fachada de un edificio de viviendas?",
        a: "Como la fachada es un elemento común, antes de pintar se necesita la aprobación de la comunidad de propietarios y los permisos que exija su ayuntamiento. Durante la visita aclaramos juntos este paso.",
      },
      {
        q: "¿Cuánto dura un mural en fachada?",
        a: "En exteriores usamos pinturas resistentes a los rayos UV y a la intemperie, preparamos bien la superficie y aplicamos barniz protector en las superficies adecuadas. En una fachada bien preparada, el mural conserva su viveza durante muchos años.",
      },
      {
        q: "¿Cómo trabajan en edificios altos?",
        a: "Según la altura del edificio y las condiciones de acceso, usamos andamios o plataforma elevadora. Nuestro propio equipo realiza todo el trabajo, incluidos los trabajos en altura.",
      },
      {
        q: "¿Influye el tiempo en el trabajo?",
        a: "La pintura exterior no se aplica con lluvia ni con mucho frío. Planificamos el calendario con flexibilidad según la previsión y le facilitamos el plazo estimado junto con el presupuesto.",
      },
      {
        q: "¿Cómo se calcula el precio de una fachada?",
        a: "Se calcula por metro cuadrado; el tamaño de la fachada, el estado de la superficie, el nivel de detalle y la necesidad de andamios o grúa determinan el precio. Preparamos un presupuesto gratuito a partir de fotos y medidas.",
      },
    ],
    whatsappText:
      "Hola, me gustaría pedir presupuesto para un mural en la fachada de un edificio. Les envío una foto de la fachada y sus medidas aproximadas.",
  },
  "belediye-duvar-resmi": {
    slug: "murales-para-ayuntamientos",
    name: "Murales para ayuntamientos",
    title: "Murales para ayuntamientos y espacios públicos | Çizgi Artizm",
    description:
      "Murales para ayuntamientos: muros urbanos, estaciones de metro, depósitos de agua y espacios de concienciación. Proyectos realizados para el Ayuntamiento Metropolitano de Esmirna y Metro İzmir.",
    label: "Para ayuntamientos",
    h1: "Murales para ayuntamientos",
    watermark: "CIUDAD",
    lead:
      "Convertimos muros urbanos, estaciones, depósitos de agua y parques en obras de arte público que cuentan la historia de la ciudad y transmiten un mensaje social.",
    cardText: "Muros urbanos, estaciones de metro, depósitos de agua y proyectos de concienciación.",
    introTitle: "Arte público que aporta valor a la ciudad",
    intro: [
      "Un mural en el espacio público llega cada día a miles de personas. Refuerza la identidad de la ciudad, revitaliza zonas olvidadas y sensibiliza sobre cuestiones sociales.",
      "Para el Ayuntamiento Metropolitano de Esmirna y Metro İzmir hemos realizado proyectos de distintas escalas, desde mascotas en depósitos de agua hasta estaciones de metro. El mural del espacio de concienciación contra la violencia hacia las mujeres de la estación de metro de Üçyol es uno de ellos.",
    ],
    pointsTitle: "Qué hacemos para ayuntamientos",
    points: [
      { t: "Metro y transporte público", d: "Murales que reciben a los viajeros en estaciones, paradas y pasos subterráneos." },
      { t: "Depósitos de agua y mascotas", d: "Depósitos de agua convertidos en mascotas de la ciudad y en imagen institucional." },
      { t: "Espacios de concienciación", d: "Obras públicas con mensaje social para días y semanas señalados." },
      { t: "Parques, colegios y casetas eléctricas", d: "Mobiliario urbano y construcciones técnicas convertidos en obras de arte integradas en su entorno." },
    ],
    worksTitle: "Algunos de nuestros trabajos en espacios públicos",
    process: [
      { t: "Proyecto y requisitos", d: "Valoramos juntos el lugar, el objetivo del proyecto y los requisitos técnicos de la institución." },
      { t: "Diseño y presentación", d: "Preparamos bocetos acordes con la identidad de la institución y con el mensaje, y los presentamos a los departamentos correspondientes para su aprobación." },
      { t: "Ejecución segura", d: "Separamos la zona de trabajo del tránsito de peatones y realizamos con nuestro propio equipo los trabajos que requieren andamios o grúa." },
      { t: "Entrega", d: "Revisamos el trabajo con los responsables de la institución y lo entregamos terminado." },
    ],
    faq: [
      {
        q: "¿Para qué instituciones han trabajado?",
        a: "Para el Ayuntamiento Metropolitano de Esmirna pintamos las mascotas de los depósitos de agua, y en las estaciones de Metro İzmir realizamos los murales de Fahrettin Altay y Üçyol. Puede ver fotos de estos trabajos en nuestra galería.",
      },
      {
        q: "¿Pueden adaptar una obra existente o un dibujo de un concurso a una pared?",
        a: "Sí. Podemos diseñar nosotros según el mensaje de la institución o, como en el proyecto del metro de Üçyol, adaptar un dibujo seleccionado a la escala de la pared.",
      },
      {
        q: "¿Pintan depósitos de agua?",
        a: "Sí. Convertimos depósitos de agua en imagen institucional o en mascotas de la ciudad; las mascotas con forma de globo terráqueo que realizamos para el Ayuntamiento Metropolitano de Esmirna son un ejemplo.",
      },
      {
        q: "¿Cómo garantizan la seguridad al trabajar en espacios públicos?",
        a: "Separamos la zona de trabajo del tránsito de peatones y usamos andamios o plataforma elevadora para los trabajos en altura. Planificamos el horario junto con la institución.",
      },
      {
        q: "¿Trabajan con ayuntamientos de otros países?",
        a: "Sí, trabajamos en todo el mundo. Hacemos la primera valoración a distancia con fotos y medidas y, cuando hace falta, visitamos el lugar.",
      },
    ],
    whatsappText:
      "Hola, me gustaría recibir información y un presupuesto para un proyecto de mural para nuestra institución.",
  },
  "trafo-boyama": {
    slug: "pintura-de-casetas-electricas",
    name: "Pintura de casetas eléctricas",
    title: "Pintura de casetas eléctricas y centros de transformación | Çizgi Artizm",
    description:
      "Convertimos casetas eléctricas en murales coloridos que el barrio aprecia. Trabajos reales en Çine (Aydın), pintura apta para exteriores y presupuesto gratuito.",
    label: "Para casetas eléctricas",
    h1: "Pintura de casetas eléctricas",
    watermark: "CASETA",
    lead:
      "Convertimos casetas eléctricas grises y anodinas en murales coloridos que el barrio aprecia y fotografía.",
    cardText: "Casetas eléctricas convertidas en obras coloridas que el barrio aprecia.",
    introTitle: "¿Por qué pintar casetas eléctricas?",
    intro: [
      "Hay casetas eléctricas en todos los barrios, pero suelen ser grises, estar llenas de pintadas y pasar desapercibidas. Una caseta pintada cambia el aspecto de su entorno y además disuade de pintadas y carteles no autorizados.",
      "Hemos pintado casetas eléctricas con temas muy distintos, desde animales realistas y retratos hasta personajes para niños y símbolos de la zona. Diseñamos según la forma de la caseta, pensando las cuatro caras como un conjunto.",
    ],
    pointsTitle: "Qué hacemos en casetas eléctricas",
    points: [
      { t: "Un diseño para las cuatro caras", d: "Composiciones que unen todas las caras de la caseta y tienen sentido desde cualquier ángulo." },
      { t: "Figuras realistas", d: "Animales realistas como jaguares, serpientes y pájaros, además de retratos." },
      { t: "Materiales para exteriores", d: "Pinturas resistentes a los rayos UV y a la intemperie; barniz protector en las superficies adecuadas." },
      { t: "Solo en el exterior", d: "Pintamos únicamente las paredes exteriores; nunca se toca el equipo eléctrico." },
    ],
    worksTitle: "Algunos de nuestros trabajos en casetas eléctricas",
    process: [
      { t: "Permiso y visita", d: "Revisamos juntos la situación del permiso y la superficie de la caseta." },
      { t: "Tema y boceto", d: "Elegimos un tema acorde con el carácter de la zona y preparamos un boceto que abarca las cuatro caras." },
      { t: "Preparación de la superficie", d: "Limpiamos pintadas y carteles antiguos, reparamos la superficie y aplicamos imprimación." },
      { t: "Pintura y protección", d: "Pintamos con pinturas para exteriores y protegemos la obra con barniz en las superficies adecuadas." },
    ],
    faq: [
      {
        q: "¿Hace falta permiso para pintar una caseta eléctrica?",
        a: "Las casetas eléctricas son responsabilidad de la compañía distribuidora de electricidad de la zona, así que antes de pintar hay que contar con el permiso necesario. Hablamos de este paso desde el principio al planificar el proyecto con el ayuntamiento o la institución.",
      },
      {
        q: "¿Habrá cortes de luz mientras se pinta?",
        a: "Solo se pintan las paredes exteriores y nunca se toca el equipo eléctrico, así que el trabajo no afecta al suministro.",
      },
      {
        q: "¿Cuánto dura una caseta pintada?",
        a: "Usamos pinturas resistentes a los rayos UV y a la intemperie y preparamos bien la superficie. En las superficies adecuadas, un barniz protector alarga la vida de la obra.",
      },
      {
        q: "¿Pueden dar un presupuesto conjunto para varias casetas?",
        a: "Sí. Podemos planificar las casetas de un distrito o un barrio con un tema común y preparar un presupuesto conjunto.",
      },
      {
        q: "¿Cómo se fija el precio de pintar una caseta eléctrica?",
        a: "El tamaño de la caseta, el estado de la superficie y el nivel de detalle determinan el precio. Envíenos una foto de cada cara y le prepararemos un presupuesto gratuito.",
      },
    ],
    whatsappText:
      "Hola, me gustaría pedir presupuesto para pintar una caseta eléctrica. Les envío fotos de la caseta.",
  },
  "duvar-resmi-fiyatlari": {
    slug: "precios-de-murales",
    name: "Precios de murales",
    title: "Precios de murales: ¿qué determina el precio? | Çizgi Artizm",
    description:
      "El precio de un mural se calcula por metro cuadrado. Conozca qué factores influyen, envíenos una foto de su pared y reciba un presupuesto gratuito.",
    label: "Precios",
    h1: "Precios de murales",
    watermark: "PRECIO",
    lead:
      "Cada pared es distinta; por eso, en lugar de una lista de precios fija, preparamos un presupuesto gratuito para cada proyecto. A continuación le explicamos qué determina el precio.",
    cardText: "Qué factores influyen en el precio y qué necesitamos para el presupuesto.",
    introTitle: "¿Cómo se calcula el precio de un mural?",
    intro: [
      "El precio de un mural se calcula por metro cuadrado. Sin embargo, dos paredes del mismo tamaño pueden tener precios distintos según el estado de la superficie, el nivel de detalle, la altura y los materiales que se usen.",
      "Por eso, un único precio por metro cuadrado rara vez refleja la realidad. Envíenos una foto de su pared y sus medidas aproximadas y le prepararemos un presupuesto gratuito a medida.",
    ],
    pointsTitle: "Qué influye en el precio",
    points: [
      { t: "Metros cuadrados", d: "La superficie total que se va a pintar es la base del precio." },
      { t: "Nivel de detalle", d: "Los retratos y figuras realistas requieren más trabajo que los diseños gráficos de colores planos." },
      { t: "Altura y acceso", d: "En las fachadas que requieren andamios o plataforma elevadora, el medio de acceso se refleja en el presupuesto." },
      { t: "Estado de la superficie", d: "La preparación necesaria, como reparar el revoque, limpiar o imprimar, varía de una superficie a otra." },
      { t: "Interior o exterior", d: "En exteriores se usan pinturas resistentes a los rayos UV y a la intemperie y, si es necesario, barniz protector." },
      { t: "Ubicación", d: "Trabajamos en todo el mundo; en los proyectos que requieren desplazamiento, el viaje y el alojamiento se incluyen al preparar el presupuesto." },
    ],
    worksTitle: "Trabajos nuestros de distintas escalas",
    processTitle: "Cómo preparamos el presupuesto",
    process: [
      { t: "Foto y medidas", d: "Nos envía una foto de la pared tomada de frente y su ancho y alto aproximados." },
      { t: "Valoración inicial", d: "Valoramos la superficie, el acceso necesario y su idea de diseño, y le hacemos llegar nuestras preguntas, si las hay." },
      { t: "Presupuesto", d: "Le enviamos un precio para su proyecto y un calendario estimado y, cuando hace falta, visitamos el lugar." },
      { t: "Diseño y pintura", d: "Con su visto bueno preparamos el diseño y, una vez aprobado el boceto, empezamos a pintar." },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta un mural por metro cuadrado?",
        a: "No tenemos un precio fijo por metro cuadrado, porque el nivel de detalle, la altura y el estado de la superficie cambian directamente el precio. Le preparamos un presupuesto a medida a partir de una foto de su pared y sus medidas.",
      },
      {
        q: "¿Pedir presupuesto tiene coste?",
        a: "No. El presupuesto es gratuito y, una vez recibido, la decisión es totalmente suya.",
      },
      {
        q: "¿Qué información debo enviar para el presupuesto?",
        a: "Una foto de la pared tomada de frente, su ancho y alto aproximados, si es interior o exterior, la ciudad y el país y, si las tiene, su idea de diseño o imágenes de referencia.",
      },
      {
        q: "¿También trabajan en paredes pequeñas?",
        a: "Sí. Realizamos proyectos de cualquier escala, desde un rincón de una cafetería hasta la fachada gigante de un edificio.",
      },
      {
        q: "¿Cómo se calcula el precio de los proyectos en otras ciudades o países?",
        a: "Trabajamos en todo el mundo. En los proyectos que requieren desplazamiento, el viaje y el alojamiento se incluyen al preparar el presupuesto.",
      },
    ],
    whatsappText:
      "Hola, me gustaría pedir presupuesto para un mural. Les envío una foto de la pared y sus medidas aproximadas.",
  },
};
