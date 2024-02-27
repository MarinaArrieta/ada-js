function obtenerPrimeraOracion(str){
    oracion = str.split('.');
    return oracion[0];
}

console.log(obtenerPrimeraOracion('Tengo varias oraciones. Esta es la segunda. Y esta es la tercera.'))