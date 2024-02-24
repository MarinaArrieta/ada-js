function calcularPorcentaje(numero, porcentaje) {
    return (numero * porcentaje) / 100;
}


function sumarPorcentaje(numero, porcentaje) {
    return numero + calcularPorcentaje(numero,porcentaje);
}


console.log (sumarPorcentaje(200, 10));