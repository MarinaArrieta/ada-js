const productos = [
    {nombre:'detergente', precio: 10, stock:0},
    {nombre:'virulana', precio: 25, stock:200},
    {nombre:'escoba', precio: 500, stock:20}
]

// Map
const nombres = productos.map( producto => producto.nombre)
console.log('Map de nombres: ',nombres)

// Find
const mayor50 = productos.find( producto => producto.precio > 50)
console.log('Find precio mayor a 50: ',mayor50)

// Filter
const stock = productos.filter( producto => producto.stock > 0)
console.log('Filter stock mayor a 0: ',stock)

// Every
const precioMayorA0 = productos.every( producto => producto.precio > 0)
console.log('Every precio mayor a 0: ',precioMayorA0)

// Some
const stockMayorA0 = productos.some( producto => producto.stock > 0)
console.log('Some stock mayor a 0: ',stockMayorA0)

// Cadena
const precioMayorA50 = 
    productos.filter(producto => producto.precio > 50).map(producto => producto.nombre)
console.log('Precio mayor a 50: ',precioMayorA50)