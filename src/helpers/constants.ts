import { Hero, HeroCarousel, NavbarItem } from "./interfaces";

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
]

export const hero: Hero = {
  title: "Sánchez",
  title2: "Matínez",
  subtitle: "& Asociados"
}

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
]