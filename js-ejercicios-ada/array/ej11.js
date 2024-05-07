function multiplicar(multiplicador,numeros){
    let resultadoArray = []
    for (let i=0; i<numeros.length; i++){
       resultado = multiplicador * numeros[i];
       resultadoArray.push(resultado)
    }
    return resultadoArray;
}

console.log(multiplicar(2, [5, 7, 15, 22, 40]));