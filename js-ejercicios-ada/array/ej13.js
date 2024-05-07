function recortar(cantidadLetras, palabras){
    let arrayNuevo = [];
    for(let i=0; i<palabras.length; i++){
        word = palabras[i]
        shorter = word.slice(0, cantidadLetras)
        arrayNuevo.push(shorter)
    }
    return arrayNuevo;
}

console.log(
    recortar(3, ['algoritmo', 'bug', 'compilador'])
);

// let array = ['algoritmo', 'bug', 'compilador']
// array2 = array[0];
// x = 1
// array3 = array2.split(array2[x])

// console.log(array3)