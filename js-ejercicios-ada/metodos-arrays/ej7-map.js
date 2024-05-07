const costos = [ 12.5, 56, 98, 45.75 ];

const agregarIVA = (costo) => {
    return costo * 1.21;
}

const sumarGanancia = (costo) => {
    return costo * 1.5;
}

let preciosFinales = costos.map(cuesta => agregarIVA(sumarGanancia(cuesta)))
console.log(preciosFinales)