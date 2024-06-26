import { images } from "../utils/images";
import { Marcas } from "../utils/marcas";
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
  {id: 1, name: "Penal", path: Navigation.service},
  {id: 0, name: "Acciones de consumo", path: Navigation.service}
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
    path: Navigation.about,
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
    image: Marcas.Plex,
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
      path: Navigation.contact+"/"
    }
  },
  {
    id: 1,
    title: "Abogados penalistas",
    image: Marcas.Defensores,
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
      path: Navigation.contact+"/"
    }
  }
]



//FOOTER
export const footer = {
  recursos: [
    {name: "Contacto", path: Navigation.contact},
    {name: "Noticias", path: '/'},
    {name: "Nosotros", path: Navigation.about},
    {name: "Inicio", path: Navigation.home}
  ],
  servicios: [
    {name: "Acciones de consumo", path: Navigation.service, id: 0},
    {name: "Penal", path: Navigation.service, id: 1}
  ],
  magna: {
    descripcion: "Contamos con las capacidades y conocimientos en el medio necesarios para ayudarle a resolver incluso las situaciones más complejas que estes enfrentando. Desde que abrimos nuestras puertas en el año 2013 nos enorgullece decir que cada año tenemos una lista más grande de clientes satisfechos nuevos y habituales."
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
    texto: "© 2024 Sánchez Martínez & Asociados. Todos los derechos reservados."
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
    placeholder: "Tu mensaje",
    pattern:"^[A-Za-z0-9 ]{3,300}$",
    required:true,
    error:"Debe ingresar un mensaje válido entre 3 y 300 caracteres."
  }
}

//NOSOTROS
export const about = {
  title: "Sánchez Martínez & Asociados ",
  description: "gerencia dos grandes servicios jurídicos.",
  firms: [
    {name: "PLEX Abogados Asociados", image: Marcas.Plex, url: ""},
    {name: "Defensorespenales.com.ar", image: Marcas.Defensores, url: ""}
  ],
  title2: "Ambos servicios se encuentran\n bajo el gerenciamiento de:",
  profile: "Dr. José Emanuel Sánchez Martínez",
  profileImage: images.profile,
  profileText: "Soy José, creo firmemente que debemos reivindicar el prestigio y la importancia del rol del abogado en la sociedad a través de un esfuerzo perseverante y un ejercicio profesional que sea sinónimo de transparencia y dedicación, así también como actores del sistema Judicial, tenemos que embanderar protagonismo, inspirar a otros, crear y adaptarse a los cambios, ser garantes de juicios justos; como abogados. \n\nLa justicia, sobre todo penal, está en un estado terminal de credibilidad y confianza frente a la sociedad. Se observa un déficit de compromiso judicial al no plasmar en sus sentencias de manera igualitaria los principios del nuevo Código Procesal Penal que alberga un novedoso sistema “Acusatorio Adversarial”. Ante ello, como abogado defensor, trabajo a diario en representación de mis clientes para que el estado operativice el conjunto de principios y garantías contenidos en la Constitución Nacional y Provincial, Tratados Internacionales, que constituyen un verdadero límite en la función del MPF a la hora de acusar, como así también para los jueces a la hora de absolver o condenar, para evitar impunidad. Abogado Penalista (Universidad Nacional de Tucumán). Procurador (Universidad Nacional de Tucumán) Diez (10) años de trayectoria."
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
