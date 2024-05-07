function repetir(valor, cantidad){
    let array = []
    for (let i=0; i<cantidad; i++){
        array.push(valor)
    }
    return array;
}
console.log(repetir('a', 5))