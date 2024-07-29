import { images } from "../utils/images";
import { Marcas } from "../utils/marcas";
import { Navigation } from "../utils/navigation";
import { Card, Hero, HeroCarousel, SectionTitles } from "./interfaces";

export const API_URL = import.meta.env.VITE_API_URL;
export const TITLE = import.meta.env.VITE_SEO_TITLE;
export const DESCRIPTION = import.meta.env.VITE_SEO_DESCRIPTON;
export const KEYWORDS = import.meta.env.VITE_SEO_KEYWORDS;
export const PHONE = 5493815796741;


//NORMALIZADOS!

//SECTIONS
export const sectionTitles: SectionTitles = {
  service: "Nuestros servicios",
  notice: "Últimas noticias"
}

//HERO
export const hero: Hero = {
  title: "Sanchez",
  title2: "Martinez",
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

