import { Hero, HeroCarousel, NavbarItem, SectionTitles, Service } from "./interfaces";

//SECTIONS
export const sectionTitles: SectionTitles = {
  service: "Nuestros servicios",
  notice: "Últimas noticias"
}

//NAVBAR
export const navbar: NavbarItem[] = [
  {
    id: 0,
    name: 'Contacto',
    path: '/contacto',
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
      {name: 'Servicios', path: ''},
      {name: 'Penal', path: ''}
    ]
  }
];

export const hero: Hero = {
  title: "Sánchez",
  title2: "Matínez",
  subtitle: "& Asociados"
};

//HERO
export const heroCarousel: HeroCarousel[] = [
  {
    id: 1,
    title: "Abogados Asociados",
    description: "Asesoramos en diferentes áreas, el servicio en beneficio de nuestros clientes se extiende al derecho penal, laboral, daños, acciones de consumo, familia y sucesiones.",
    button: "Consultar ahora",
    path: "",
  },
  {
    id: 2,
    title: "Nuestra firma legal",
    description: "Magna es un grupo de abogados asociados conformado por profesionales especializados en diferentes ramas del derecho, brindamos asesoramiento en materia Penal, civil: (Familia - Sucesiones - Daños - Acciones de consumo, laboral, etc.).",
    button: "Leer más de nosotros",
    path: "",
  },
];

//NUESTROS SERVICIOS
export const servicesCards: Service[] = [
  {
    name: "Penal",
    description: "Defensa de personas imputadas y querellas...",
    path: ""
  },
  {
    name: "Laboral",
    description: "Despidos, ART, asesoramiento a empresas...",
    path: ""
  },
  {
    name: "Daños",
    description: "Accidentes de tránsito, mala praxis...",
    path: ""
  },
  {
    name: "Acciones de consumo",
    description: "Planes de ahorros, estafas virtuales, tarjetas de créditos, operaciones bancarias...",
    path: ""
  },
  {
    name: "Familia y sucesiones",
    description: "Divorcios, Alimentos, régimen comunicacional, sucesiones por causa de muerte, testamentos...",
    path: ""
  },
]






//RESPUESTA BACKEND A NOTICIAS
export const response = [
  {
    "id": 1,
    "title": "Nuevo descubrimiento en Marte",
    "subtitle": "Rover encuentra señales de agua",
    "description": "El rover de la NASA ha encontrado nuevas señales de agua en Marte, lo que podría cambiar el rumbo de la exploración espacial.",
    "image": "iVBORw0KGgoAAAANSUhEUgAAAAUA...",
    "url": "https://example.com/nuevo-descubrimiento-en-marte",
    "creationDate": "2024-05-28T09:00:00Z"
  },
  {
    "id": 2,
    "title": "Innovación en energías renovables",
    "subtitle": "Nueva tecnología solar",
    "description": "Una startup ha desarrollado una nueva tecnología de paneles solares que promete aumentar la eficiencia en un 50%.",
    "image": "iVBORw0KGgoAAAANSUhEUgAAAAUA...",
    "url": "https://example.com/innovacion-energias-renovables",
    "creationDate": "2024-05-29T10:30:00Z"
  },
  {
    "id": 3,
    "title": "Avances en la inteligencia artificial",
    "subtitle": "IA supera el test de Turing",
    "description": "Un nuevo sistema de inteligencia artificial ha superado el test de Turing, planteando preguntas sobre el futuro de la IA.",
    "image": "iVBORw0KGgoAAAANSUhEUgAAAAUA...",
    "url": "https://example.com/avances-inteligencia-artificial",
    "creationDate": "2024-06-01T14:45:00Z"
  },
  {
    "id": 4,
    "title": "Descubrimiento de un nuevo planeta",
    "subtitle": "Planeta habitable descubierto en un sistema solar cercano",
    "description": "Astrónomos han descubierto un nuevo planeta que podría ser habitable en un sistema solar cercano.",
    "image": "iVBORw0KGgoAAAANSUhEUgAAAAUA...",
    "url": "https://example.com/descubrimiento-nuevo-planeta",
    "creationDate": "2024-06-02T12:00:00Z"
  },
  {
    "title": "Titulo de prueba actualizado",
    "subtitle": "Subtitulo de prueba",
    "description": "Descripcion de prueba",
    "image": "iVBORw0KGgoAAAANSUhEUgAAAAUA...",
    "url": "https://example.com/avances-inteligencia-artificial",
    "creationDate": "2024-06-02T12:00:00Z",
    "id": 5
  }
]