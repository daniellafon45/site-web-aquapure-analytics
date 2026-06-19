import type { Translations } from "../types";
import { digitalTwinFaqEs } from "../digital-twin-faq-content";

export const es: Translations = {
  meta: {
    homeTitle: "AquaPure Analytics — Reduzca sus costos de tratamiento de efluentes",
    homeDescription:
      "Químicos, energía, análisis de laboratorio: gestione sus efluentes en tiempo real con sus sensores e IA. Datos alojados en Quebec.",
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
    privacy: "Política de privacidad",
    linkedInAria: "AquaPure Analytics en LinkedIn",
    sectors: [
      { label: "Agua municipal", href: "/#eaux-municipales" },
      { label: "Minería", href: "/#mine" },
      { label: "Pasta y papel", href: "/#pate-et-papier" },
      { label: "Alimentos y bebidas", href: "/#agroalimentaire" },
    ],
  },
  consent: {
    ariaLabel: "Consentimiento para la recopilación de datos",
    message:
      "Utilizamos cookies esenciales para recordar sus preferencias y solo activamos herramientas de análisis con su consentimiento, conforme a la Ley 25 de Quebec y la LPRPDE.",
    accept: "Aceptar",
    reject: "Rechazar",
    learnMore: "Política de privacidad",
  },
  home: {
    hero: {
      title: "Reduzca sus costos de tratamiento de efluentes, antes de que la factura se acumule",
      subtitle:
        "Convierte tus datos en decisiones inmediatas: menos desperdicio, más control y rendimiento sostenible, sin interrumpir tus operaciones actuales.",
      hosting: "Sus datos permanecen en Quebec, alojados en sus instalaciones.",
      contact: "Vea cómo reducir sus costos",
      demo: "Solicitar demo",
    },
    industries: {
      eyebrow: "Optimizar sus operaciones",
      title: "Diseñado a medida para entornos operativos complejos",
      description:
        "Convierta sus compromisos ESG en ganancias medibles: menos agua, menos química, menos carbono, documentados en tiempo real por sus gemelos digitales.",
      scheduleMeeting: "Agendar una reunión",
      items: [
        {
          id: "eaux-municipales",
          label: "AGUA MUNICIPAL",
          title: "Tratamiento optimizado, costos e impacto controlados.",
          desc: "Gestiona tus operaciones de tratamiento de agua en tiempo real para reducir los costos de productos químicos y energía, estabilizar los procesos y disminuir el impacto ambiental de tu planta municipal.",
        },
        {
          id: "mine",
          label: "MINERÍA",
          title: "Refuerza tu vigilancia de conformidad con la Directiva 019.",
          desc: "Supervisa en tiempo real la calidad de tus efluentes mineros y el cumplimiento de los umbrales regulatorios, especialmente para metales pesados: anticipa desviaciones, documenta el cumplimiento y reduce el riesgo ambiental.",
        },
        {
          id: "pate-et-papier",
          label: "PASTA Y PAPEL",
          title: "Aguas de proceso guiadas, biodigestión reforzada.",
          desc: "Gestiona las aguas procedentes de tus operaciones y optimiza la biodigestión de tus efluentes en tiempo real: estabiliza los procesos, mejora el rendimiento biológico y reduce los costos de tratamiento.",
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
        "Nuestras interfaces están diseñadas según sus necesidades: ergonómicas, intuitivas y fáciles de usar.",
      body: "Desplegamos sistemas interoperables conectados a su infraestructura existente y adaptamos cada módulo a sus usos reales, para que la tecnología acelere sus operaciones sin complicarlas. Aquí tiene un resumen de nuestras funciones, y mucho más.",
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
            "Conecta tus PLCs y sistemas industriales, PI, Ignition, Wonderware, sin empezar desde cero.",
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
        "Conéctate a los PLCs y protocolos que ya usas, Modbus, OPC UA, Siemens, Schneider y más, sin rehacer tu infraestructura.",
    },
    partners: {
      title: "Respaldado por el ecosistema de innovación de Quebec",
      description:
        "Tecnología probada impulsada por líderes de innovación para acelerar tu transición digital con confianza.",
    },
    contact: {
      title: "Su hoja de ruta de IA comienza aquí",
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
      privacyConsentBefore: "Acepto que mis datos sean tratados conforme a la ",
      privacyConsentLink: "política de privacidad",
      privacyConsentAfter: ".",
      errors: {
        lastName: "El apellido es obligatorio.",
        firstName: "El nombre es obligatorio.",
        emailRequired: "El correo es obligatorio.",
        emailInvalid: "Por favor ingresa una dirección de correo válida.",
        message: "Describe tu necesidad.",
        messageTooLong: "El mensaje no puede exceder 5000 caracteres.",
        emailTooLong: "El correo es demasiado largo.",
        consentRequired: "Debe aceptar la política de privacidad para enviar su solicitud.",
      },
    },
  },
  digitalTwin: {
    title: "¿Cómo funciona nuestra plataforma de gemelo digital?",
    subtitle:
      "Nuestros gemelos digitales conectan sus sensores, SCADA e historiales para reproducir sus procesos en tiempo real: visualice el estado actual, anticipe desviaciones y automatice el control de sus autómatas. Las recomendaciones se basan en lo que nuestros modelos matemáticos tratan, y que sus equipos pueden seguir y defender, no en una IA de caja negra.",
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
      "Construir un Québec capaz de dominar su transformación industrial: esa es nuestra misión. Optimizar los procesos, preservar los equipos, cerrar el ciclo del agua y la energía, con decisiones basadas en datos fiables, alojados localmente y defendibles por sus equipos.",
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
    faq: digitalTwinFaqEs,
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
    relatedAria: "Artículos relacionados y páginas del sitio",
    relatedTitle: "Otros artículos publicados",
    seeAlso: "Ver también:",
    and: "y",
    allArticles: "Todos los artículos",
    privacyPolicy: "Política de privacidad",
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
    {
      id: "seed-heavy-metals",
      slug: "metales-pesados-prediccion-ia-sensores-mineria",
      title: "Metales pesados en minería: por qué los sensores actuales no bastan, y cómo la IA cierra la brecha",
      excerpt:
        "Cobre, níquel, zinc: los resultados de laboratorio llegan tarde. Los gestores correlacionan turbidez y pH por regresión, AquaPure automatiza esa lógica con IA y sus sensores existentes.",
      category: "Mine",
      author: "Equipo AquaPure",
      content: `<p><strong>Los metales pesados en efluentes mineros</strong> (cobre, níquel, zinc, plomo, hierro) están estrictamente regulados en Quebec, en particular bajo la <a href="https://www.environnement.gouv.qc.ca/milieu_ind/directive019/index.htm" rel="noopener noreferrer" target="_blank">Directiva 019</a>. El reto no es medirlos, sino verlos <em>a tiempo</em> para actuar.</p>

<h2>Por qué el seguimiento en tiempo real falla</h2>

<p>La mayoría de los sitios ya tienen sensores continuos: pH, turbidez, conductividad (EC), oxígeno disuelto (DO), carbono orgánico disuelto (DOC/DQO). Miden bien el proceso, pero no el cobre, el níquel ni el zinc directamente. La referencia sigue siendo el <strong>muestreo manual</strong> y el laboratorio acreditado, con 3 a 10 días de retraso.</p>

<h2>Regresión y correlaciones: la práctica habitual</h2>

<p>Los ingenieros construyen <strong>curvas de regresión</strong> entre parámetros fáciles de medir y resultados de metales. La turbidité se correlaciona con Cu y Fe; el pH con la solubilidad de Ni y Zn; el DOC y el DO con la complejación y el redox.</p>

<figure>
<img src="/blog/article-regression-loupe.png" alt="Lupa sobre un gráfico de regresión que ilustra la correlación entre variables de proceso y metales pesados" width="800" height="450" loading="lazy" />
<figcaption>La regresión manual es habitual, pero difícil de mantener al ritmo operativo.</figcaption>
</figure>

<h2>Cinco metales prioritarios</h2>

<ul>
<li><strong>Cobre (Cu)</strong>, flotación y relaves</li>
<li><strong>Níquel (Ni)</strong>, minas Ni-Cu</li>
<li><strong>Zinc (Zn)</strong>, drenaje ácido y neutralización</li>
<li><strong>Plomo (Pb)</strong>, yacimientos polimetálicos</li>
<li><strong>Hierro (Fe)</strong>, precipitación y transporte coloidal</li>
</ul>

<h2>Cómo AquaPure predice metales con IA</h2>

<p>AquaPure entrena modelos de <strong>inteligencia artificial</strong> con el historial de sus sensores y análisis de laboratorio para estimar Cu, Ni, Zn, Pb y Fe en continuo, sin nuevas sondas metálicas.</p>

<h2>Menos costos y menos estrés en inspecciones</h2>

<p>Cada análisis acreditado cuesta entre 80 $ y 250 $ CAD. La predicción continua concentra los muestreos donde hay riesgo y prepara a los equipos ante visitas del ministerio de medio ambiente de Quebec (MELCCFP).</p>

<h3>¿La IA reemplaza el laboratorio acreditado?</h3>
<p>No. Complementa la vigilancia reglamentaria entre dos muestreos oficiales.</p>

<p>Para profundizar: <a href="/blogue/agua-proceso-mineria-optimizar-sin-comprometer-cumplimiento" rel="noopener noreferrer">agua de proceso en minería</a> y <a href="/blogue/planta-depuracion-control-tiempo-real" rel="noopener noreferrer">control en tiempo real de planta de depuración</a>.</p>

<p><em>Última actualización: junio de 2026.</em></p>`,
    },
  ],
};

