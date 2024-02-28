var minimo = 0;
var maximo = 10;

function estaEnRango(valor, minimo, maximo){
    if (valor>=minimo || valor<=maximo){
        return true;
    } else return false;
}

console.log(estaEnRango(20));