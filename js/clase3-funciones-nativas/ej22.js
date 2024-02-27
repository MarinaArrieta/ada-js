function obtenerDuracionEnSegundos(duracion){
    separo = duracion.split(':');
    posicion1 = parseInt(separo[0]);
    posicion2 = parseInt(separo[1]);
    resultado = (posicion1 * 60) + posicion2;
    return resultado;
}

console.log(obtenerDuracionEnSegundos('10:42'));