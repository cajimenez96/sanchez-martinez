import { NavbarItem } from "./interfaces";

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