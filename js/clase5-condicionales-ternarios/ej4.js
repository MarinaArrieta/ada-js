function obtenerDiasMes(mes){
    return mes == 'enero' ?
    31 :
    mes == 'febrero' ?
    28 :
    mes == 'marzo' ?
    31 :
    mes == 'abril' ?
    30 :
    mes == 'mayo' ?
    31 :
    mes == 'junio' ?
    30 :
    mes == 'julio' ?
    31 :
    mes == 'agosto' ?
    31 :
    mes == 'septiembre' ?
    30 :
    mes == 'octubre' ?
    31 :
    mes == 'noviembre' ?
    30 : 31;
}

console.log(obtenerDiasMes('diciembre'));