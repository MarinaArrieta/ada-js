function capitalizar(str){
    separo = str.split('');
    mayuscula = separo[0].toUpperCase();
    return mayuscula.concat(str.slice(1));
}

console.log(capitalizar('buenas como'));