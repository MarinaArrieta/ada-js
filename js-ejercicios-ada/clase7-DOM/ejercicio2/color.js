let boton = document.getElementById('button');
let cuerpo = document.getElementById('body');

boton.addEventListener('click', () => {
    
    let color = prompt('Ingrese un color en Hexadecimal: ', 'Color...');

    cuerpo.style.backgroundColor = color;
});