function removerVocales(str){
    return str = str.replace(/[aeiou]/ig, '');
} 

console.log(removerVocales('hola como estas'))