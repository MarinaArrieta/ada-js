function crearCuentaRegresiva(numeroInicial){
    let array = [];
    for (i=0; i<=numeroInicial; i++){
        array.push(i);
    }
    return array.toReversed();
}
console.log(crearCuentaRegresiva(3));