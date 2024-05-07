const nombreCompleto = obtenerNombreCompleto('Yuki', 'Haru')
const saludo = saludar(nombreCompleto)
const grito = gritar(saludo)

function obtenerNombreCompleto(nombre, apellido) {
    return nombre + ' ' + apellido
}

function saludar(obtenerNombreCompleto) {
    return 'Hola ' + obtenerNombreCompleto + ', un gusto conocerte'
}

function gritar(saludar) {
    return '¡' + saludar + '!'
}

console.log(grito)