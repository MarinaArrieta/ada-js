function puedeVerPelicula(edad, tieneAutorizacion){
    return edad >= 15 || tieneAutorizacion == true;
}

console.log(puedeVerPelicula(18, true));