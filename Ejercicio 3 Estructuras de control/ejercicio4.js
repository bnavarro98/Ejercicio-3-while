let palabras = [];

var entrada = prompt("Ingresa una palabra:");

while (entrada !== "") {
  
  palabras.push(entrada);

  
  entrada = prompt("Ingresa otra palabra o letra (deja vacío y pulsa ACEPTAR para terminar:");
}

let resultado = palabras.join(" ");

document.write("Palabras capturadas: " + resultado);