function obtenerGeneracion(anioNacimiento){
    if (anioNacimiento >= 1949 && anioNacimiento <= 1968){
        return 'Baby boomer';
    } else if (anioNacimiento >= 1969 && anioNacimiento <= 1980){
        return 'Generación X';
    } else if (anioNacimiento >= 1981 && anioNacimiento <= 1993){
        return 'Millennials'
    } else if (anioNacimiento >= 1994 && anioNacimiento <= 2010)
        return 'Generación Z';
}

console.log(obtenerGeneracion(1986));