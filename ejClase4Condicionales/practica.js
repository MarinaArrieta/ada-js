function practica(numero){
    if (numero-0){
        return 'Ingrese numeros...';
    } else if(0 < numero && numero < 135){
        return 'No es valido...';
    } /* else 
        return 'No puede utilizar fracciones...'; */
}

console.log(practica('abc'))

/* function podesVotar(edad){
    if(edad >= 18 && edad < 70){
        return "Es obligatorio que votes."
    } else if((edad >= 16 && edad < 18) || edad >= 70) { 
        return "No es obligatorio que votes."
    } else {
        return "No podes votar."
    }
    (numero % 1 !== 0)
} */