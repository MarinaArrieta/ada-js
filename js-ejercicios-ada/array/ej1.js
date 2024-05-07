let numeros = [5, 7, 99, 34, 54, 2, 12];

numeros.sort(function (a, b) {
    return a - b;
});
console.log(numeros[0]);

// obtener el número menor del array
let arrayNumeros = [5, 7, 99, 34, 54, 2, 12];

let obtenerMenor = (numeros)=> {
    let menor = numeros[0];

    for (let num of numeros){
        if(num < menor){
            menor = num;
        }
    }
    return menor;
}
console.log(obtenerMenor(arrayNumeros));