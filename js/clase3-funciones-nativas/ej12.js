function ocultarContrasenia(contrasenia){
    contrasenia = contrasenia.toString().replace(/\d/g, '*');
    return contrasenia;
}

// [0-9] se puede marcar un rango
// \d Coincide con cualquier dígito (número arábigo). Equivalente a [0-9]
// \w Coincide con cualquier carácter alfanumérico del alfabeto latino básico, incluido el guión bajo

console.log(ocultarContrasenia(1234567890));