const API_BASE_URL = "http://localhost:8080/api";

// Crear un nuevo viaje
async function crearViaje(viajeData, conductorId) {
  const response = await fetch(`${API_BASE_URL}/viajes?conductorId=${conductorId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(viajeData)
  });
  
  if (!response.ok) {
    throw new Error("Error al crear viaje");
  }
  return await response.json();
}

// Obtener viajes pendientes por DNI
async function obtenerViajesPendientes(dni) {
  const response = await fetch(`${API_BASE_URL}/viajes/pendientes?dni=${dni}`);
  if (!response.ok) {
    throw new Error("Error al obtener viajes pendientes");
  }
  return await response.json();
}

// Obtener viajes finalizados por DNI 
async function obtenerViajesFinalizados(dni) {
  const response = await fetch(`${API_BASE_URL}/viajes/finalizados?dni=${dni}`);
  if (!response.ok) {
    throw new Error("Error al obtener viajes finalizados");
  }
  return await response.json();
}

// Cancelar un viaje
async function cancelarViajeBackend(id) {
  const response = await fetch(`${API_BASE_URL}/viajes/${id}`, {
    method: "DELETE"
  });
  if (!response.ok) {
    throw new Error("Error al cancelar viaje");
  }
}

// Exportar funciones para usar en otros archivos
window.crearViaje = crearViaje;
window.obtenerViajesPendientes = obtenerViajesPendientes;
window.obtenerViajesFinalizados = obtenerViajesFinalizados;
window.cancelarViajeBackend = cancelarViajeBackend;