import { Navigation } from "../../utils/navigation";

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
    correo: "consultas@defensorespenales.com.ar",
    telefono: "+54 9 381 579-6741",
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