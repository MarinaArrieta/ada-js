function avanzarSemaforo(colorActual){
    if (colorActual == 'verde'){
        return 'Amarillo';
    } else if (colorActual == 'amarillo'){
        return 'Rojo';
    } else return 'Verde';
}

console.log(avanzarSemaforo('rojo'));