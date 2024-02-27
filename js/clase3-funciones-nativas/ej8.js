function esFraccionMayorAUno(fraccion){
    resultado = fraccion.split('/');
    div = (resultado[0] / resultado[1]) > 1;
    return div.toString();
}

console.log(esFraccionMayorAUno('1/2'));