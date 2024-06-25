import { images } from "../utils/images";
import { Navigation } from "../utils/navigation";
import { Card, Hero, HeroCarousel, LinkType, NavbarItem, NoticeResponse, SectionTitles } from "./interfaces";

export const API_URL = import.meta.env.VITE_API_URL;
export const TITLE = import.meta.env.VITE_SEO_TITLE;
export const DESCRIPTION = import.meta.env.VITE_SEO_DESCRIPTON;
export const KEYWORDS = import.meta.env.VITE_SEO_KEYWORDS;


//NORMALIZADOS!

//SECTIONS
export const sectionTitles: SectionTitles = {
  service: "Nuestros servicios",
  notice: "Últimas noticias"
}

const service: LinkType[] = [
  {id: 0, name: "Acciones de consumo", path: Navigation.service},
  {id: 1, name: "Penal", path: Navigation.service}
]

//NAVBAR
export const navbar: NavbarItem[] = [
  {
    id: 0,
    name: 'Contacto',
    path: Navigation.contact,
    dropdown: false
  },
  {
    id: 1,
    name: 'Nosotros',
    path: '/nosotros',
    dropdown: false
  },
  {
    id: 2,
    name: 'Más',
    path: '',
    dropdown: true,
    dropdownMenu: [
      {
        id: 0,
        name: 'Servicios',
        path: '',
        options: service
      },
      {
        id: 1,
        name: 'Preguntas',
        path: Navigation.faq,
      }
    ]
  }
];

export const navbarMobile: NavbarItem[] = [
  {
    id: 0,
    name: 'Contacto',
    path: Navigation.contact,
    dropdown: false
  },
  {
    id: 1,
    name: 'Nosotros',
    path: Navigation.about,
    dropdown: false
  },
  {
    id: 2,
    name: 'Servicios',
    path: '',
    dropdown: true,
    dropdownMenu: service
  },
  {
    id: 3,
    name:'Preguntas',
    path: Navigation.faq,
    dropdown: false
  }
];
//FIN-NAVBAR

//HERO
export const hero: Hero = {
  title: "Sánchez",
  title2: "Matínez",
  subtitle: "& Asociados"
};

export const heroCarousel: HeroCarousel[] = [
  {
    id: 1,
    name: "Asesoramiento",
    description: "Asesoramos en diferentes áreas del derecho. Gerenciamos servicios jurídicos en: Derecho Penal y Acciones de Consumo.",
    button: "Consultar ahora",
    path: Navigation.contact,
  },
  {
    id: 2,
    name: "Derecho Penal",
    description: "Representación Legal, Asesoramiento Jurídico, Investigación, Negociación con Fiscalía, Apelaciones, Defensa en Diversas Áreas, Asistencia a Detenidos, Defensa Especializada.",
    button: "Leer más de nosotros",
    path: Navigation.about,
  },
];
//FIN-HERO

//NUESTROS SERVICIOS
export const servicesCards: Card[] = [
  {
    id: 0,
    name: "Acciones de consumo",
    description: "Planes de ahorros, estafas virtuales, tarjetas de créditos, operaciones bancarias...",
    path: Navigation.service,
    image: images.serviceConsumption,
  },
  {
    id: 1,
    name: "Penal",
    description: "Defensa de personas imputadas y querellas...",
    path: Navigation.service,
    image: images.servicePenal,
  }
];
//FIN-NUESTROS SERVICIOS

///////////////////////////////





export const services = [
  {
    id: 0,
    title: "Abogados de consumo",
    description: [
      {
        title: "Consultas",
        description: "Evacuamos consultas respecto de todo tipo de prejuicios relacionados con contratos de consumo; Tarjeta de crédito, planes de ahorro, operaciones Bancarias, etc."
      },
      {
        title: "Asesoramiento preventivo y defensivo",
        description: "Brindamos asesoramiento preventivo y defensivo en todos los temas referidos a los derechos del consumidor. En el marco legal de protección al consumidor, la preparación de contratos y otros instrumentos empresariales que prevean posibles reclamos es de gran importancia para prevenir o minimizar potenciales controversias con consumidores y usuarios o asociaciones de consumidores."
      },
      {
        title: "Experiencia",
        description: "Tenemos experiencia en la defensa administrativa y judicial en distintos organismos y tribunales, de las empresas que enfrentan reclamos de consumidores. El estudio tiene servicio de consulta en cuestiones de publicidad, (publicidad comparativa, publicidad engañosa, promociones y ofertas de productos, etc.), trato al cliente, etc., tanto desde la óptica del derecho del consumidor como en relación con las normas de lealtad comercial y de defensa de la competencia."
      },
      {
        title: "Profesionalismo",
        description: "La actuación profesional del estudio también incluye la defensa en casos de acciones colectivas y el asesoramiento en materia de responsabilidad por productos elaborados."
      }
    ],
    items: [
      { id: 1, description: "Planes de ahorro" },
      { id: 2, description: "Estafas virtuales" },
      { id: 3, description: "Tarjetas de créditos" },
      { id: 4, description: "Operaciones bancarias" },
      { id: 5, description: "Solicitud de baja de servicios" },
      { id: 6, description: "Sobreendeudamiento del consumidor" },
      { id: 7, description: "Robos sufridos en supermercados, shoppings" },
      { id: 8, description: "Reclamos ante obra social, seguros" },
      { id: 9, description: "Incumplimiento de contrato por parte del proveedor" }
    ],
    button: {
      text: "Consultar ahora",
      path: "/contacto/"
    }
  },
  {
    id: 1,
    title: "Abogados penalistas",
    description: [
      {
        title: "Derechos y garantías",
        description: "Abogamos por los derechos y garantías de las personas involucradas en causas penales, sean víctimas del delito o imputados. Procuramos en cada caso una gestión seria, comprometida y eficaz. Custodiar la plena vigencia del Estado de Derecho frente al ejercicio del poder punitivo por parte de los órganos estatales predispuestos."
      },
      {
        title: "Defensa",
        description: "Estamos en condición de asumir su defensa, cualquiera sea la acusación en su contra o el delito que lo ha damnificado, como tus abogados de confianza."
      }
    ],
    items: [
      { id: 1, description: "Defensa de personas imputadas" },
      { id: 2, description: "Querellas" }
    ],
    button: {
      text: "Consultar ahora",
      path: "/contacto/"
    }
  },
  {
    id: 2,
    title: "Abogados laborales",
    description: [
      {
        title: "Derecho laboral",
        description: "Nos especializamos en Derecho Laboral, además de contar con amplia experiencia en la materia y con muchos casos de éxito que nos diferencian."
      },
      {
        title: "Asesoramiento y asistencia",
        description: "Brindamos asesoramiento y asistencia legal para trabajadores, representándolos y defendiendo sus derechos en todas las instancias administrativas o judiciales."
      }
    ],
    items: [
      { id: 1, description: "Entrevistas y asesoramientos virtuales y presenciales." },
      { id: 2, description: "Asesoramiento y representación judicial y extrajudicial a trabajadores y pymes en el área del derecho laboral." },
      { id: 3, description: "Abonos mensuales para empresas y/o emprendedores." },
      { id: 4, description: "Asesoramiento y representación de trabajadores en el área de: sanciones disciplinarias, trabajo no registrado ('en negro')." },
      { id: 5, description: "Pago de diferencias salariales. Despidos c/o sin causa. Indemnizaciones." },
      { id: 6, description: "Asesoramiento y representación en el área de Riesgos de trabajo. Accidentes de trabajo." },
      { id: 7, description: "Enfermedad profesional." },
      { id: 8, description: "Trámites administrativos en la Superintendencia de Riesgos del Trabajo." }
    ],
    button: {
      text: "Consultar ahora",
      path: "/contacto/"
    }
  },
  {
    id: 3,
    title: "Abogados de daños y prejuicios",
    description: [
      {
        title: "Asesoramiento",
        description: "Te asesoramos para que puedas cobrar la mejor indemnización posible por daños materiales y/o lesiones en siniestros que sufriste en el menor tiempo posible. No importa si sos peatón, ciclista, pasajero, motociclista o conductor. Si sufriste un accidente, tienes derecho a una compensación económica por parte del causante del daño y de su compañía de seguro. Contamos con un equipo de especialistas en accidentes de tránsito con años de experiencia, listos para ayudarte."
      }
    ],
    items: [
      { id: 1, description: "Asesoramiento en daños por accidentes de tránsito." },
      { id: 2, description: "Mala praxis profesional." },
      { id: 3, description: "Daños derivados de incumplimiento contractual." }
    ],
    button: {
      text: "Consultar ahora",
      path: "/contacto/"
    }
  },
  {
    id: 4,
    title: "Abogados de Familia y sucesiones",
    description: [
      {
        title: "Pasión y vocación",
        description: "Los abogados y abogadas que ejercemos el derecho de familia en el estudio, los hacemos con pasión y con vocación, podemos y debemos ayudar a rescatar y reparar vínculos, donde lo primordial sean los niños niñas y adolescentes, atrapados en una familia en conflicto, los que serán personas del mañana."
      },
      {
        title: "Simple y asequible",
        description: "Tambien ofrecemos la posibilidad de Tramitar tu sucesión, de forma sencilla, económica, profesional y con todas las garantías legales."
      }
    ],
    items: [
      { id: 1, description: "Divorcios" },
      { id: 2, description: "División de Sociedad Conyugal" },
      { id: 3, description: "Cese de Alimentos" },
      { id: 4, description: "Alimentos" },
      { id: 5, description: "Régimen comunicacional" },
      { id: 6, description: "Sucesiones" },
      { id: 7, description: "Testamientos" },
      { id: 8, description: "Cesión de Derechos hereditarios" },
      { id: 9, description: "Adquisición y venta de bienes en sucesiones en trámite" }

    ],
    button: {
      text: "Consultar ahora",
      path: "/contacto/"
    }
  }
]



//FOOTER
export const footer = {
  recursos: [
    {name: "Contacto", path: '/contacto'},
    {name: "Noticias", path: '/'},
    {name: "Nosotros", path: '/nosotros'},
    {name: "Inicio", path: '/'}
  ],
  servicios: [
    {name: "Familia y sucesiones", path: '/servicio', id: 4},
    {name: "Acciones de consumo", path: '/servicio', id: 0},
    {name: "Daños y prejuicios", path: '/servicio', id: 3},
    {name: "Laboral", path: '/servicio', id: 2},
    {name: "Penal", path: '/servicio', id: 1}
  ],
  magna: {
    descripcion: "Magna es un grupo de abogados asociados conformado por profesionales especializados en diferentes áreas del derecho, brindamos asesoramiento en materia Penal, civil: (Familia - Sucesiones - Daños - Acciones de consumo, laboral, etc.)"
  },
  contacto: {
    correo: "hola@magnastudio.com.ar",
    telefono: "+54 9 3815 79-6741",
    direccion: {
      ciudad: "Tucumán",
      localidad: "San Miguel de Tucumán",
      calle: "Congreso de Tucumán 566"
    },
    ubicacion: "Ver ubicación exacta"
  },
  footer: {
    texto: "© 2024 Magna abogados asociados. Todos los derechos reservados."
  }
};

//CONTACT
export const contact = {
  nombre: { 
    id: '0',
    label: "Nombre",
    name: "name",
    inputType: "text",
    placeholder: "Tú nombre",
    pattern:"^[A-Za-z0-9 ]{3,20}$",
    required:true,
    error:"Debe ingresar un nombre entre 3 y 20 caracteres"
  },
  apellido: {
    id: '1',
    label: "Apellido",
    name: "lastName",
    inputType: "text",
    placeholder: "Tú apellido",
    pattern:"^[A-Za-z0-9 ]{3,20}$",
    required:true,
    error:"Debe ingresar un apellido entre 3 y 20 caracteres"
  },
  asunto: {
    id: '2',
    placeholder: "Seleccione un asunto",
    options: [
      {label: "Acciones de consumo", value: "Acciones de consumo", id: 0},
      {label: "Penal", value: "Penal", id: 1},
      {label: "Laboral", value: "Laboral", id: 2},
      {label: "Daños", value: "Daños", id: 3},
      {label: "Familia y sucesiones", value: "Familia y sucesiones", id: 4},
      {label: "Otras consultas", value: "Otras consultas", id: 5},  
    ],
    required:true,
    error:"Debe seleccionar una opción"
  },
  correo: {
    id: '3',
    label: "Correo electrónico",
    name: "email",
    inputType: "email",
    placeholder: "Tú correo electrónico",
    pattern :"^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$",
    required:true,
    error:"Debe ingresar un correo electrónico válido"
  },
  mensaje: {
    id: '4',
    label: "Mensaje",
    name: "message",
    inputType: "textarea",
    placeholder: "",
    pattern:"^[A-Za-z0-9 ]{3,300}$",
    required:true,
    error:"Debe ingresar un mensaje válido entre 3 y 300 caracteres."
  }
}

//NOSOTROS
export const about = {
  title: "Acerca de nuestra firma",
  description: "Magna es un grupo de abogados asociados conformado por profesionales especializados en diferentes ramas del derecho, brindamos asesoramiento en materia Penal, civil: (Familia - Sucesiones - Daños - Acciones de consumo, laboral, etc.).",
  firms: "Nuestras firmas",
  text: "Nuestro equipo está conformado con profesionales especializados en diferentes áreas."
}

export const faqs = [
  {title: "¿Debo pagar consulta antes del asesoramiento?", description: "Magna es un grupo de abogados asociados conformado por profesionales especializados en diferentes ramas del derecho, brindamos asesoramiento en materia Penal, civil: (Familia - Sucesiones - Daños - Acciones de consumo, laboral, etc.)."},
  {title: "¿Existen formas de pago?", description: "Magna es un grupo de abogados asociados conformado por profesionales especializados en diferentes ramas del derecho, brindamos asesoramiento en materia Penal, civil: (Familia - Sucesiones - Daños - Acciones de consumo, laboral, etc.)."},
  {title: "¿El estudio asesorara todo tipo de consultas?", description: "Magna es un grupo de abogados asociados conformado por profesionales especializados en diferentes ramas del derecho, brindamos asesoramiento en materia Penal, civil: (Familia - Sucesiones - Daños - Acciones de consumo, laboral, etc.)."},
  {title: "¿Cuáles Son Los horarios de atención?", description: "Magna es un grupo de abogados asociados conformado por profesionales especializados en diferentes ramas del derecho, brindamos asesoramiento en materia Penal, civil: (Familia - Sucesiones - Daños - Acciones de consumo, laboral, etc.)."}
]







//RESPUESTA BACKEND A NOTICIAS
export const response: NoticeResponse[] = [
  {
    "id": 1,
    "title": "Nuevo descubrimiento en Marte",
    "subtitle": "Rover encuentra señales de agua",
    "description": "El rover de la NASA ha encontrado nuevas señales de agua en Marte, lo que podría cambiar el rumbo de la exploración espacial.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEBPSUW7FAHHSi85hDsV_R3SwscJC4l4ArsQ&s",
    "url": "https://example.com/nuevo-descubrimiento-en-marte",
    "creationDate": "2024-05-28T09:00:00Z"
  },
  {
    "id": 2,
    "title": "Innovación en energías renovables",
    "subtitle": "Nueva tecnología solar",
    "description": "Una startup ha desarrollado una nueva tecnología de paneles solares que promete aumentar la eficiencia en un 50%.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEBPSUW7FAHHSi85hDsV_R3SwscJC4l4ArsQ&s",
    "url": "https://example.com/innovacion-energias-renovables",
    "creationDate": "2024-05-29T10:30:00Z"
  },
  {
    "id": 3,
    "title": "Avances en la inteligencia artificial",
    "subtitle": "IA supera el test de Turing",
    "description": "Un nuevo sistema de inteligencia artificial ha superado el test de Turing, planteando preguntas sobre el futuro de la IA.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEBPSUW7FAHHSi85hDsV_R3SwscJC4l4ArsQ&s",
    "url": "https://example.com/avances-inteligencia-artificial",
    "creationDate": "2024-06-01T14:45:00Z"
  },
  {
    "id": 4,
    "title": "Descubrimiento de un nuevo planeta",
    "subtitle": "Planeta habitable descubierto en un sistema solar cercano",
    "description": "Astrónomos han descubierto un nuevo planeta que podría ser habitable en un sistema solar cercano.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEBPSUW7FAHHSi85hDsV_R3SwscJC4l4ArsQ&s",
    "url": "https://example.com/descubrimiento-nuevo-planeta",
    "creationDate": "2024-06-02T12:00:00Z"
  },
  {
    "title": "Titulo de prueba actualizado",
    "subtitle": "Subtitulo de prueba",
    "description": "Descripcion de prueba",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEBPSUW7FAHHSi85hDsV_R3SwscJC4l4ArsQ&s",
    "url": "https://example.com/avances-inteligencia-artificial",
    "creationDate": "2024-06-02T12:00:00Z",
    "id": 5
  },
  {
    "title": "Titulo de prueba actualizado",
    "subtitle": "Subtitulo de prueba",
    "description": "Descripcion de prueba",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEBPSUW7FAHHSi85hDsV_R3SwscJC4l4ArsQ&s",
    "url": "https://example.com/avances-inteligencia-artificial",
    "creationDate": "2024-06-02T12:00:00Z",
    "id": 6
  },
  {
    "title": "Titulo de prueba actualizado",
    "subtitle": "Subtitulo de prueba",
    "description": "Descripcion de prueba",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEBPSUW7FAHHSi85hDsV_R3SwscJC4l4ArsQ&s",
    "url": "https://example.com/avances-inteligencia-artificial",
    "creationDate": "2024-06-02T12:00:00Z",
    "id": 7
  },
  {
    "title": "Titulo de prueba actualizado",
    "subtitle": "Subtitulo de prueba",
    "description": "Descripcion de prueba",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEBPSUW7FAHHSi85hDsV_R3SwscJC4l4ArsQ&s",
    "url": "https://example.com/avances-inteligencia-artificial",
    "creationDate": "2024-06-02T12:00:00Z",
    "id": 8
  }
]
