function esHoraValida(hora) {
    separo = hora.split(':');
    posicion0 = parseInt(separo[0]);
    posicion1 = parseInt(separo[1]);
    return ((0 <= posicion0 && posicion0 <= 24) && (0 <= posicion1 && posicion1 <= 60));
}

console.log(esHoraValida('00:00'));