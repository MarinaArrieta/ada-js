function estaEnRango(valor, minimo, maximo){
    return valor >= minimo && valor <= maximo;
}

console.log(estaEnRango(-3, 1, 10));