import { LinkType, NavbarItem } from "../../helpers/interfaces";
import { Navigation } from "../../utils/navigation";

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