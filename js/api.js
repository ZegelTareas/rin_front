const BASE_URL = "http://localhost:8080/api";

/**
 * Obtener viajes pendientes por DNI
 * @param {string} dni
 * @returns {Promise<Array>}
 */
async function obtenerViajesPendientes(dni) {
  const response = await fetch(`${BASE_URL}/viajes/pendientes?dni=${dni}`);
  if (!response.ok) {
    throw new Error("No se pudieron cargar los viajes pendientes.");
  }
  return await response.json();
}

/**
 * Obtener viajes finalizados por DNI
 * @param {string} dni
 * @returns {Promise<Array>}
 */
async function obtenerViajesFinalizados(dni) {
  const response = await fetch(`${BASE_URL}/viajes/finalizados?dni=${dni}`);
  if (!response.ok) {
    throw new Error("No se pudieron cargar los viajes finalizados.");
  }
  return await response.json();
}

/**
 * Cancelar un viaje por ID
 * @param {number} idViaje
 * @returns {Promise<void>}
 */
async function cancelarViajeBackend(idViaje) {
  const response = await fetch(`${BASE_URL}/viajes/${idViaje}/cancelar`, {
    method: 'PUT'
  });

  if (!response.ok) {
    throw new Error("No se pudo cancelar el viaje.");
  }
}
