function puedeAvanzar(colorSemaforo){
    if (colorSemaforo == 'verde'){
        return 'Puede avanzar';
    } else if (colorSemaforo == 'amarillo'){
        return 'Comience a frenar si quiere...'
    } else if ( colorSemaforo == 'rojo'){
        return 'No puede avanzar'
    } else return 'Error: color de semáforo inválido';
}

console.log(puedeAvanzar('marron'));