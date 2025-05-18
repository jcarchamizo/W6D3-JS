// BECA ESTUDIANTE - Versión interactiva con prompt y alert

let edad = parseInt(prompt("Introduce tu edad:"));
let ciudad = prompt("¿En qué ciudad resides?").toLowerCase();
let tieneFamiliaNumerosa = prompt("¿Tienes familia numerosa? (sí/no)").toLowerCase() === "sí";
let esGenioProgramacion = prompt("¿Eres un genio de la programación? (sí/no)").toLowerCase() === "sí";

let cumpleCondicion1 = edad >= 18 && ciudad === "barcelona";
let cumpleCondicion2 = edad > 30 && tieneFamiliaNumerosa;
let cumpleCondicion3 = edad >= 12 && edad <= 18 && esGenioProgramacion;

if (cumpleCondicion1 || cumpleCondicion2 || cumpleCondicion3) {
  alert("¡Felicidades! Cumples con los requisitos para obtener la beca.");
} else {
  alert("Lo sentimos, no cumples con los requisitos para la beca.");
}