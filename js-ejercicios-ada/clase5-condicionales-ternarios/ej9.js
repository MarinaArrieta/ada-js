function jugarPiedraPapelTijera(a, b){
    return a == 'tijera' && b == 'piedra' ?
    '¡Ganó piedra!' :
    a == 'piedra' && b == 'tijera' ?
    '¡Ganó piedra!' :
    a == 'papel' && b == 'piedra' ?
    '¡Ganó papel!' :
    a == 'piedra' && b == 'papel' ?
    '¡Ganó papel!' :
    a == 'papel' && b == 'tijera' ?
    '¡Ganó tijera!' :
    a == 'tijera' && b == 'papel' ?
    '¡Ganó tijera!' :
    a == 'piedra' && b == 'piedra' ?
    '¡Empate!' :
    a == 'papel' && b == 'papel' ?
    '¡Empate!' : '¡Empate!';
}

console.log(jugarPiedraPapelTijera('tijera', 'tijera'));