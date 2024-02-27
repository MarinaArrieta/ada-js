function esPuenteSeguro(puente){
    //return puente.indexOf(' ') < 0 ;
    return !puente.includes(' ');
}

console.log(esPuenteSeguro('####'));