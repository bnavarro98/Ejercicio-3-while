while (true) {

    var dia = prompt("Ingrese un día de la semana:");
    dia = dia.toLowerCase();

    switch (dia) {
        case "lunes":
            alert("Es lunes. ¡Ánimo para comenzar la semana!");
            break;
        case "martes":
            alert("Es martes. ¡A seguir adelante!");
            break;
        case "miércoles":
            alert("Es miércoles. ¡Ya estamos a mitad de semana!");
            break;
        case "jueves":
            alert("Es jueves. ¡Casi llegamos al viernes!");
            break;
        case "viernes":
            alert("Es viernes. ¡Fin de semana a la vista!");
            break;
        case "sábado":
            alert("Es sábado. ¡Disfruta tu día!");
            break;
        case "domingo":
            alert("Es domingo. Ve a descansar.");
            function limpiarDocumento() {
                document.body.innerHTML = '';
            }
            limpiarDocumento();
            break;
    }
}