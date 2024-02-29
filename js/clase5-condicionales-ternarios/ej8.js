function obtenerNota(puntaje){
    return puntaje < 6 ?
    'Desaprobado' :
    puntaje >= 6 && puntaje < 7 ?
    'Regular' :
    puntaje >= 7 && puntaje < 8 ?
    'Bueno' :
    puntaje >= 8 && puntaje < 10 ?
    'Muy bueno' :
    puntaje < 0 || puntaje > 10 &&
    'Puntaje inválido';
}

console.log(obtenerNota(11));