function avanzarSemaforo(colorActual){
    return colorActual == 'verde' ?
    'amarillo' :
    colorActual == 'amarillo' ?
    'rojo' : 
    colorActual == 'rojo' ?
    'verde' : 'No pertenece a los colores del semáforo'
}

console.log(avanzarSemaforo('marron'));