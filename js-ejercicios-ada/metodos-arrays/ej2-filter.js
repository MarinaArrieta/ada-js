const masNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];
const numerosPares = [];
const numerosImpares = [];

let pares = masNumeros.filter(numero => numero % 2 == 0)
numerosPares.push(pares)
let impares = masNumeros.filter(numero => numero % 2 !== 0)
numerosImpares.push(impares)

console.log(numerosPares)
console.log(numerosImpares)