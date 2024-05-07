function obtenerExtension(archivo){
   busco = archivo.slice(archivo.indexOf('.'));
   return busco.replace(/\W/g, '');
}

console.log(obtenerExtension('imagen.html'));

// \W Coincide con cualquier carácter que no sea una palabra del alfabeto latino básico