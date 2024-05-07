const recorreArray = (arr) => {
    let suma = 0;
    for(let i=0; i<=arr.length-1; i++){
     suma += arr[i];
    }
    return suma
}

resultado = recorreArray([5,7,8,9]);
console.log(resultado);

resultado = recorreArray([]);
console.log(resultado);