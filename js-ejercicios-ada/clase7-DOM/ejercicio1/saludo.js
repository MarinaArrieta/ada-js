let boton = document.getElementById('button');

boton.addEventListener('click', () => {
    let nombre = prompt('Ingrese su nombre: ', 'Nombre...');

    // Verifica si el usuario hizo click en Aceptar
    if (nombre !== null && nombre !== ''){
        // Muestra saludo si ingresó el Nombre
        alert('Hola, ' +nombre+ ' !');
    } else alert('No ingresaste un nombre válido.');
    //muestra ese mensaje si hizo click en cancelar o no ingresó un nombre
});