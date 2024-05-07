let boton = document.getElementById('boton');
let backHeader = document.getElementById('back-header');
let backMain = document.getElementById('back-main');
let botonImg = document.getElementById('boton-img');
let botonText = document.getElementById('boton-text');
let topText = document.getElementById('top-text');
let bottomText = document.getElementById('bottom-text');

let modo = 'claro';

boton.addEventListener('click', () => {
    if (modo === 'oscuro'){
        backHeader.style.backgroundColor = '#f5e4af';
        backMain.style.backgroundImage = 'linear-gradient(#AD88C6 1px, transparent 1px), linear-gradient(to right, #AD88C6 1px, #f8f4ff 1px)';
        boton.style.color = 'var(--blue)';
        boton.style.backgroundColor = '#f5e4af';
        botonImg.style.color = 'var(--blue)';
        botonImg.style.backgroundColor = '#f5e4af';
        botonText.style.color = 'var(--blue)';
        botonText.style.backgroundColor = '#f5e4af';
        botonText.style.color = 'var(--blue)';
        topText.style.backgroundColor = 'var(--pink)';
        bottomText.style.backgroundColor = 'var(--pink)';
        boton.textContent = 'Modo Oscuro';
        modo = 'claro';
    } else {
        backHeader.style.backgroundColor = '#181b2c';
        backMain.style.backgroundImage = 'linear-gradient(#2a184b 1px, transparent 1px), linear-gradient(to right, #2a184b 1px, #140e21 1px)';
        boton.style.color = 'var(--green)';
        boton.style.backgroundColor = '#181b2c';
        botonImg.style.color = 'var(--green)';
        botonImg.style.backgroundColor = '#181b2c';
        botonText.style.color = 'var(--green)';
        botonText.style.backgroundColor = '#181b2c';
        topText.style.backgroundColor = 'var(--dark-purple)';
        bottomText.style.backgroundColor = 'var(--dark-purple)';
        boton.textContent = 'Modo Claro';
        modo = 'oscuro';
    }
});