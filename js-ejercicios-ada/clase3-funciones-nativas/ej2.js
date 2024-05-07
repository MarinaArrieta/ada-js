function esUltimoCaracter(palabra, caracter){
    longitud = palabra.length;
    indice = longitud  - 1;
    return palabra[indice] == caracter;
}

console.log(esUltimoCaracter('yuki', 'i'));