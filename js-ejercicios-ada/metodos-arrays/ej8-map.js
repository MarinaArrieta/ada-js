const productos = [ 'celular', 'notebook', 'monitor' ];
const costos = [ 12.5, 56, 98 ];

const agregarIVA = (costo) => {
    return costo * 1.21;
}

const sumarGanancia = (costo) => {
    return costo * 1.5;
}

let preciosFinales = productos.map((product, indice) => {
    precio_original = costos[indice]
    precio_final = agregarIVA(sumarGanancia(precio_original))
    return `${product} ${precio_final}`
})
console.log(preciosFinales);