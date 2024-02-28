function jugarPiedraPapelTijera(a, b){
    if (a == 'tijera' && b == 'piedra'){
        return '¡Ganó piedra!';
    } else if (a == 'piedra' && b == 'tijera'){
        return '¡Ganó piedra!';
    } else if (a == 'papel' && b == 'piedra'){
        return '¡Ganó papel!';
    } else if (a == 'piedra' && b == 'papel'){
        return '¡Ganó papel!';
    } else if (a == 'papel' && b == 'tijera'){
        return '¡Ganó tijera!';
    } else if (a == 'tijera' && b == 'papel'){
        return '¡Ganó tijera!';
    } else if (a == 'piedra' && b == 'piedra'){
        return '¡Empate!';
    } else if (a == 'papel' && b == 'papel'){
        return '¡Empate!';
    } else if (a == 'tijera' && b == 'tijera')
        return '¡Empate!';
}

console.log(jugarPiedraPapelTijera('hola', 'yuki'));