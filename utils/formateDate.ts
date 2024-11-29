export default function formatDate(isoDate: any) {
  const date = new Date(isoDate);

  // Extraer día, mes y año en UTC
  const day = String(date.getUTCDate()).padStart(2, '0'); // Día
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Mes
  const year = date.getUTCFullYear(); // Año

  return `${day}-${month}-${year}`;
}

// Ejemplo de uso
// const isoDate = "2024-12-01T00:00:00.000Z";
// console.log(formatDate(isoDate)); // "01-12-2024"
