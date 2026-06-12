import type { Translations } from "../types";

export const es: Translations = {
  meta: {
    homeTitle: "AquaPure Analytics — Domina tus operaciones hídricas",
    homeDescription:
      "Optimiza la gestión del agua con datos, IA e inteligencia en tiempo real. Reduce costos y alcanza tus metas ESG.",
    digitalTwinTitle: "Gemelo digital — AquaPure Analytics",
    digitalTwinDescription:
      "Descubre cómo AquaPure conecta tus bases de datos y utiliza un agente de IA autoalojado para automatizar procesos industriales y optimizar el control en tiempo real.",
    blogTitle: "Blog de AquaPure Analytics",
    blogDescription:
      "Noticias, análisis y experiencia para gestores de agua municipales, mineros, de pasta y papel y de alimentos en Quebec.",
    notFoundTitle: "Página no encontrada",
    notFoundBody: "La página que buscas no existe o se ha movido.",
    errorTitle: "Esta página no pudo cargarse",
    errorBody: "Ocurrió un problema de nuestro lado.",
    backHome: "Volver al inicio",
    retry: "Reintentar",
  },
  nav: {
    sectors: "Sectores",
    features: "Funciones",
    integrations: "Integraciones",
    digitalTwin: "Gemelo digital",
    blog: "Blog",
    contact: "Contacto",
    requestDemo: "Solicitar demo",
    demoShort: "Demo",
    openMenu: "Abrir menú",
    menu: "Menú",
    language: "Idioma",
  },
  footer: {
    sectorsTitle: "Sectores industriales",
    companyTitle: "Empresa",
    blog: "Blog",
    linkedInAria: "AquaPure Analytics en LinkedIn",
    sectors: [
      { label: "Agua municipal", href: "/#eaux-municipales" },
      { label: "Minería", href: "/#mine" },
      { label: "Pasta y papel", href: "/#pate-et-papier" },
      { label: "Alimentos y bebidas", href: "/#agroalimentaire" },
    ],
  },
  home: {
    hero: {
      title: "Domina tus operaciones hídricas con datos e IA",
      subtitle:
        "Convierte tus datos en decisiones inmediatas: menos desperdicio, más control y rendimiento sostenible, sin interrumpir tus operaciones actuales.",
      hosting: "Tus datos alojados en Quebec, en tus instalaciones.",
      contact: "Contáctanos",
      demo: "Solicitar demo",
    },
    industries: {
      eyebrow: "Nuestros sectores",
      title: "Diseñado para entornos operativos complejos",
      description:
        "Convierte tus compromisos ESG en resultados operativos concretos: reduce el consumo de agua, limita tu huella de carbono y documenta el progreso con la precisión que tus equipos y partes interesadas puedan defender, con análisis en tiempo real e IA, en el corazón de las industrias de Quebec.",
      scheduleMeeting: "Agendar una reunión",
      items: [
        {
          id: "eaux-municipales",
          label: "AGUA MUNICIPAL",
          title: "Distribución eficiente, agua de calidad.",
          desc: "Asegura una distribución eficiente y la calidad del agua con análisis en tiempo real, previniendo fugas y optimizando el tratamiento para las comunidades.",
        },
        {
          id: "mine",
          label: "MINERÍA",
          title: "Extracción optimizada, impacto controlado.",
          desc: "Optimiza la extracción y la gestión de recursos con modelos predictivos robustos, garantizando la seguridad operativa y reduciendo el impacto ambiental.",
        },
        {
          id: "pate-et-papier",
          label: "PASTA Y PAPEL",
          title: "Agua industrial bajo control.",
          desc: "Reduce el consumo de agua y controla el tratamiento de efluentes con supervisión en tiempo real y mantenimiento predictivo de tus instalaciones.",
        },
        {
          id: "agroalimentaire",
          label: "ALIMENTOS Y BEBIDAS",
          title: "Calidad y cumplimiento, de forma continua.",
          desc: "Asegura la calidad del agua en tus procesos alimentarios con análisis inteligente, alertas proactivas y trazabilidad completa.",
        },
      ],
    },
    features: {
      title: "Funciones",
      ergonomic:
        "La interfaz es muy ergonómica y está diseñada para ser intuitiva y fácil de usar.",
      body: "Desplegamos sistemas interoperables conectados a tu infraestructura actual y adaptamos cada módulo a tus necesidades reales, para que la tecnología acelere tus operaciones sin complicarlas.",
      learnMore: "Saber más",
      items: [
        {
          id: "connect-external-db",
          label: "Conexión BD externa",
          category: "Integración de datos\ny conectividad",
          title: "Datos de sensores en tiempo real",
          description:
            "Visualiza cada lectura, cada equipo, cada línea, y reacciona antes de que el problema cueste caro.",
        },
        {
          id: "import",
          label: "Importar",
          category: "Integración de datos\ny conectividad",
          title: "Importar y exportar",
          description:
            "Recupera el historial en el periodo y formato que importan para tus informes, auditorías y decisiones.",
        },
        {
          id: "invite-team",
          label: "Invitar al equipo",
          category: "Colaboración",
          title: "Gestión de equipo",
          description:
            "Centraliza roles, actividades de campo y seguimiento operativo: una sola fuente de verdad para toda la organización.",
        },
        {
          id: "share-project",
          label: "Compartir proyecto",
          category: "Colaboración",
          title: "Editor de informes",
          description:
            "Produce informes claros y compartibles que refuercen la confianza de las partes interesadas.",
        },
        {
          id: "mission-scoot",
          label: "Misiones de campo",
          category: "Colaboración",
          title: "Misión de campo",
          description:
            "Envía a tus técnicos al lugar correcto en el momento adecuado con evidencia fotográfica, GPS e instrucciones precisas.",
        },
        {
          id: "erd",
          label: "Diagrama ERD",
          category: "Gestión de esquemas",
          title: "Diagrama ERD",
          description:
            "Comprende la estructura de tus datos de un vistazo y acelera cada integración.",
        },
        {
          id: "apis",
          label: "APIs",
          category: "Integraciones\ny automatizaciones",
          title: "Gemelo digital y APIs",
          description:
            "Controla parámetros, umbrales de seguridad y permisos SCADA desde una plataforma unificada.",
        },
        {
          id: "automate",
          label: "Integración PLC",
          category: "Integraciones\ny automatizaciones",
          title: "Conexiones SCADA",
          description:
            "Conecta tus PLCs y sistemas industriales — PI, Ignition, Wonderware — sin empezar desde cero.",
        },
      ],
    },
    stats: {
      monitoring: "Control inteligente de tus procesos industriales",
      energy: "Reducción medible del consumo energético",
      carbon: "Disminución concreta de tu huella de carbono",
    },
    integrations: {
      title: "Compatible con tu entorno de producción",
      description:
        "Conéctate a los PLCs y protocolos que ya usas — Modbus, OPC UA, Siemens, Schneider y más — sin rehacer tu infraestructura.",
    },
    partners: {
      title: "Respaldado por el ecosistema de innovación de Quebec",
      description:
        "Tecnología probada impulsada por líderes de innovación para acelerar tu transición digital con confianza.",
    },
    contact: {
      title: "Hablemos de tu proyecto",
      subtitle:
        "Descubre cómo AquaPure Analytics puede mejorar tu desempeño ambiental y económico con una estrategia a medida, adaptada a tu realidad operativa.",
      formTitle: "Describe tu necesidad",
      firstName: "Nombre",
      lastName: "Apellido",
      email: "Correo electrónico",
      phone: "Teléfono",
      company: "Empresa",
      website: "Sitio web",
      websitePlaceholder: "ej. aquapure-analytics.com",
      need: "Tu necesidad",
      needPlaceholder:
        "Describe tu desafío operativo, tus objetivos ESG o el sector objetivo…",
      submit: "Enviar solicitud",
      submitting: "Enviando…",
      successTitle: "Solicitud enviada con éxito",
      successBody:
        "Un miembro del equipo de AquaPure analizará tu solicitud y se pondrá en contacto contigo en uno o dos días hábiles para concertar una conversación focalizada sobre tus operaciones.",
      honeypot: "No completar",
      errors: {
        lastName: "El apellido es obligatorio.",
        firstName: "El nombre es obligatorio.",
        emailRequired: "El correo es obligatorio.",
        emailInvalid: "Por favor ingresa una dirección de correo válida.",
        message: "Describe tu necesidad.",
        messageTooLong: "El mensaje no puede exceder 5000 caracteres.",
        emailTooLong: "El correo es demasiado largo.",
      },
    },
  },
  digitalTwin: {
    title: "¿Cómo funciona nuestra plataforma de gemelo digital?",
    subtitle:
      "Descubre cómo AquaPure conecta tus bases de datos y usa un agente de IA autoalojado para automatizar procesos industriales y optimizar el control en tiempo real.",
    diagram: {
      selfHostedDb: "Base de datos AquaPure autoalojada",
      yourDatabase: "Tu propia base de datos",
      connectedPlcs: "Conectado a tus PLCs",
      externalSources: "Fuentes externas",
      controlPlatform: "Plataforma de control AquaPure",
      intuitiveUi: "Interfaz intuitiva",
      andMore: "¡Y más!",
      localApi: "API y servidor locales",
      queryAutomate: "Consulta, automatiza el control y visualiza datos",
      uiItems: ["Tabla", "Monitor", "Editor", "Formulario"],
      apiItems: ["Web", "Aplicaciones de terceros", "Móvil"],
      formatItems: ["JSON", "CSV", "Excel", "Airtable"],
    },
    whyTitle: "¿Por qué AquaPure?",
    whySubtitle:
      "Automatiza el control industrial, reduce el consumo energético y toma decisiones basadas en datos fiables, sin comprometer la seguridad ni la soberanía de tus datos.",
    whyFeatures: [
      {
        title: "Optimización de procesos con IA",
        desc: "Modelos predictivos que ajustan parámetros de forma continua para maximizar la eficiencia y reducir pérdidas.",
      },
      {
        title: "Gemelos digitales inteligentes",
        desc: "Una réplica virtual de tus instalaciones para simular, probar y validar decisiones antes de desplegarlas.",
      },
      {
        title: "Control automatizado en tiempo real",
        desc: "Opera equipos con umbrales de seguridad, alertas proactivas y supervisión centralizada.",
      },
      {
        title: "Integración fluida",
        desc: "Conecta SCADA, PLCs y bases de datos existentes sin rehacer tu infraestructura.",
      },
      {
        title: "Impacto energético y ambiental",
        desc: "Reduce consumo de agua y energía mientras documentas el progreso ESG con precisión.",
      },
      {
        title: "Soberanía y seguridad de datos",
        desc: "Alojado en Quebec con un agente de IA autoalojado para que tus datos permanezcan bajo tu control.",
      },
    ],
    partnersTitle: "Respaldado por el ecosistema de innovación de Quebec",
    partnersSubtitle:
      "Tecnología de vanguardia impulsada por socios de confianza para acelerar la transición digital de tu industria.",
    ctaTitle: "¿En qué sector estás? ¡Contáctanos y hablemos de tu proyecto!",
    municipal: "Para municipios",
    industry: "Para la industria",
    contactUs: "Contáctanos",
  },
  blog: {
    eyebrow: "Blog",
    title: "El blog de AquaPure",
    subtitle:
      "Noticias, análisis y experiencias sobre la gestión del agua en entornos municipales e industriales, sin jerga innecesaria.",
    noImage: "Sin imagen",
    readArticle: "Leer artículo",
    minRead: "min",
    minReadLong: "min de lectura",
    backToBlog: "Volver al blog",
    topicCtaTitle: "¿Hay un tema que te gustaría ver aquí?",
    topicCtaBody:
      "Hablemos de tu realidad operativa; te mostraremos cómo los datos pueden ayudar, sin desordenar lo que ya funciona.",
    scheduleMeeting: "Agendar una reunión",
    articleCtaTitle: "¿Este tema te interesa?",
    articleCtaBody:
      "Descubre cómo AquaPure ayuda a los equipos de Quebec a recuperar el control de sus operaciones hídricas.",
    requestDemo: "Solicitar demo",
    digitalTwin: "Gemelo digital",
    articleTitleSuffix: "Blog AquaPure",
  },
  categories: {
    "Eaux municipales": "Agua municipal",
    Mine: "Minería",
    "Pâte et papier": "Pasta y papel",
    Agroalimentaire: "Alimentos y bebidas",
    Opérations: "Operaciones",
    Conformité: "Cumplimiento",
  },
  seedPosts: [
    {
      id: "seed-mine",
      slug: "agua-proceso-mineria-optimizar-sin-comprometer-cumplimiento",
      title: "Agua de proceso en minería: optimizar sin comprometer el cumplimiento",
      excerpt:
        "Reutilizar, reciclar, reducir: la presión viene de ambos lados. Sin visibilidad continua, cada ajuste parece una apuesta que los equipos dudan en tomar.",
      category: "Mine",
      author: "Equipo AquaPure",
      content: `En entornos mineros, cada metro cúbico de agua tiene un peso doble: el costo de suministro por un lado y las obligaciones regulatorias sobre vertidos por el otro. Los equipos se encuentran atrapados entre la demanda de producción y una supervisión más estricta de los impactos hídricos.

Sin visibilidad continua sobre la calidad y los volúmenes, cualquier optimización se siente como una apuesta. Se reduce un caudal aquí y se descubre una desviación de cumplimiento allá. La prudencia prevalece y el agua sigue utilizándose, día tras día, un poco más de lo necesario.

Las lecturas manuales y los informes mensuales llegan demasiado tarde. Cuando la desviación aparece en una hoja de cálculo, miles de metros cúbicos ya pueden haber sido tratados o vertidos en condiciones subóptimas. Entonces los ingenieros pasan horas reconstruyendo el historial en lugar de corregir la causa raíz.

Los modelos predictivos conectados a tus sensores de campo permiten anticipar las desviaciones antes de que se conviertan en incidentes. Puedes optimizar los circuitos de reciclaje con confianza y con una trazabilidad que los auditores pueden seguir línea por línea.

La cuestión no es elegir entre productividad y medio ambiente. Es dejar de gestionar uno sin el otro y dejar de pagar el coste oculto de la espera.`,
    },
    {
      id: "seed-municipal",
      slug: "planta-depuracion-control-tiempo-real",
      title: "Planta de depuración: recuperar el control cuando cada minuto cuenta",
      excerpt:
        "Caudales, lodos, calidad de descarga: una planta municipal genera miles de puntos de datos al día. El problema no es la falta de información, sino el retraso para actuar.",
      category: "Eaux municipales",
      author: "Equipo AquaPure",
      content: `En una planta de tratamiento de aguas residuales, el margen de error es estrecho. Un desequilibrio en la aireación, un aumento de turbidez o una bomba que deriva: las consecuencias se miden en la calidad de la descarga, la energía desperdiciada y las horas extra del equipo de turno.

Sin embargo, la mayoría de las decisiones aún se basan en instantáneas, lecturas de campo, exportaciones SCADA con retraso y reuniones semanales para "poner al día". Entre dos verificaciones, la realidad operativa ya ha cambiado.

Este desfase crea un problema silencioso: los operadores saben que se aproxima una anomalía, pero no tienen las herramientas para cuantificarla y elevarla antes de que se convierta en un incidente. Resultado: intervenciones reactivas, sobreconsumo energético y explicaciones difíciles ante el consejo municipal.

Una supervisión en tiempo real, correlacionada con tus procesos reales, cambia la postura de los equipos. Las alertas se vuelven accionables, las tendencias visibles y los informes ESG se documentan automáticamente, sin reconstruir el historial manualmente cada trimestre.

Cada semana sin visibilidad continua acumula costos operativos y ambientales que no aparecen en tus paneles. La pregunta ya no es si necesitas más sensores, sino cómo convertir lo que ya mides en decisiones inmediatas.`,
    },
  ],
};

