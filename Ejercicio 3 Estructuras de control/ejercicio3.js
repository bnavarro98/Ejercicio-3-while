var arregloDeNumeros = [];

var numero = parseFloat(prompt("Ingrese un número cualquiera (ingrese 0 para finalizar) "));

while (numero !== 0) {
    if (!isNaN(numero)) {
        arregloDeNumeros.push(numero);
    }

    numero = parseFloat(prompt("Ingrese otro número cualquiera (ingrese 0 para finalizar) "));
}

document.write("Números capturados: " + arregloDeNumeros);