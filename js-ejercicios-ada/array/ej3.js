//ver si un número se encuentra dentro del array
let contiene = (numero, numeros) => {
    for (let num of numeros){
        if(num === numero){
            return true;
        }
    }
    return false;
}
console.log(contiene(80, arrayNumeros));