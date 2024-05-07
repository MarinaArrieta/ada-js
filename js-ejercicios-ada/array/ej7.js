function separar(perrosYGatos){
    separoGato = perrosYGatos.split('🐶');
    separoPerro = perrosYGatos.split('🐱');
    junto = separoGato.toString()+separoPerro.toString();
    return junto.replaceAll(',', '');
}

console.log(separar('🐶🐱🐶🐱🐱🐶🐶'));