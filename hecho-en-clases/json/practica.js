const fs = require('fs');

const nuevoProducto = {
    titulo: "virulana",
    descripcion: "remueve hasta tus pecados",
    precio: 100,
    categoria: "limpieza"
}

// lee
let limpiezaJson = fs.readFileSync("./practica.json");
console.log(limpiezaJson);

// transforma json a objeto
let limpiezaArray = JSON.parse(limpiezaJson);

// se pone otro objeto
limpiezaArray.push(nuevoProducto);

// transforma de nuevo a JSON
let nuevoProductoJSON = JSON.stringify(limpiezaArray);

// Sobre escribe el json
fs.writeFileSync('./practica.json', nuevoProductoJSON);