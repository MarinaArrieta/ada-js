function obtenerSensacion(temperatura){
    return temperatura < 0 ?
    '¡Está helando!' :
    temperatura >= 0 && temperatura < 15 ?
    '¡Hace frío!' :
    temperatura >= 15 && temperatura < 25 ?
    'Está lindo' :
    temperatura >= 25 && temperatura < 30 ?
    'Hace calor' : '¡Hace mucho calor!';
}

console.log(obtenerSensacion(36));