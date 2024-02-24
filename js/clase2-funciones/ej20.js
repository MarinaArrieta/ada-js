function calcularPorcentaje(numero, porcentaje) {
    return (numero * porcentaje) / 100;
}


function restarPorcentaje(numero, porcentaje) {
    return numero - calcularPorcentaje(numero,porcentaje);
}


console.log (restarPorcentaje(200, 10));