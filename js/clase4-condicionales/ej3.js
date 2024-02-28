function puedeAvanzar(colorSemaforo){
    return colorSemaforo == 'verde' && colorSemaforo != 'amarillo' && colorSemaforo != 'rojo';
}

console.log(puedeAvanzar('verde'));