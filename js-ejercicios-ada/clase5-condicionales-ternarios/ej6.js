function obtenerGeneracion(anioNacimiento){
    return anioNacimiento >= 1949 && anioNacimiento <= 1968 ?
    'Baby boomer' :
    anioNacimiento >= 1969 && anioNacimiento <= 1980 ?
    'Generación X' :
    anioNacimiento >= 1981 && anioNacimiento <= 1993 ?
    'Millennials' :
    anioNacimiento >= 1994 && anioNacimiento <= 2010 ?
    'Generación Z' : 'Esa generación aun no la tenemos';
}

console.log(obtenerGeneracion(1930));