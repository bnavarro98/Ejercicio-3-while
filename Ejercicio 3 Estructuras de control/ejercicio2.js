let numero1 = prompt("Ingresa el primer número entre 1 y 50")
let numero2 = prompt("Ingresa el segundo número entre 1 y 50")

numero1 = parseInt(numero1)
numero2 = parseInt(numero2)

if (numero1 < 1 || numero1 > 50 || numero2 < 1 || numero2 > 50 || isNaN(numero1) || isNaN(numero2)) {
    alert("Alguno de tus números está fuera del rango solicitado o no es un número");
    location.reload()
}
else {
    // Inicializar el contador
    let i = 1;

    // Usaré el while para mostrar los números del 1 al 50
    while (i <= 50) {
        // Verificar si el número actual es igual a uno de los números ingresados por el usuario
        if (i === numero1 || i === numero2) {
            console.log(i + " ¡Lotería!");
        } else {
            console.log(i);
        }

        i++;
    }
}