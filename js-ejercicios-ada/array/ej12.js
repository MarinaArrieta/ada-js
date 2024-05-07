function filtrarPorLongitudMayorA(longitud, palabras){
    let arrayNuevo = [];
    for(let i=0; i<palabras.length; i++){
        if (palabras[i].length > longitud){
            arrayNuevo.push(palabras[i]);
        }
    }
    return arrayNuevo;
}

console.log(filtrarPorLongitudMayorA(4, ['dia','remolacha','azul','sorpresa','te','verde']) );