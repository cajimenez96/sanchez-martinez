import { services } from "./constants";

export const standarDate = (fechaISO: string): string  => {
  // Parsear la fecha en formato ISO 8601
  const fecha = new Date(fechaISO);

  // Obtener los componentes de la fecha
  const dia = fecha.getUTCDate();
  const mes = fecha.getUTCMonth();
  const año = fecha.getUTCFullYear();

  // Mapear los meses del inglés al español
  const meses: { [key: number]: string } = {
      0: "enero",
      1: "febrero",
      2: "marzo",
      3: "abril",
      4: "mayo",
      5: "junio",
      6: "julio",
      7: "agosto",
      8: "septiembre",
      9: "octubre",
      10: "noviembre",
      11: "diciembre"
  };

  // Formatear la fecha al formato deseado
  const fechaFormateada = `${dia} ${meses[mes]}, ${año}`;

  return fechaFormateada;
};

export const getService = (id: number) => {
  return services.find(service => service.id === id);
}

export const normalizeLink = (path: string, id?: number) => {
  if (id || id >= 0) return `${path}/${id}`;
  return path;
}