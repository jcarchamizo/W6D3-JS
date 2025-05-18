// Simulación del algoritmo de arranque del coche

let viveCerca = prompt("¿Vives cerca? (sí/no)").toLowerCase() === "sí";
let ganasCaminar = prompt("¿Tienes ganas de caminar? (sí/no)").toLowerCase() === "sí";

if (viveCerca && ganasCaminar) {
  alert("Te vas andando y ya lo arreglarás mañana.");
} else {
  let tieneGasolina = prompt("¿El coche tiene gasolina? (sí/no)").toLowerCase() === "sí";

  if (!tieneGasolina) {
    let tieneDinero = prompt("¿Tienes dinero para poner gasolina? (sí/no)").toLowerCase() === "sí";

    if (tieneDinero) {
      alert("Pones gasolina.");
    } else {
      alert("Vas en metro.");
    }
  } else {
    let tieneBateria = prompt("¿Tiene batería el coche? (sí/no)").toLowerCase() === "sí";

    if (!tieneBateria) {
      alert("Recarga la batería.");
    } else {
      alert("Pásate por el mecánico.");
    }
  }
}