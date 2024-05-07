let azul = document.getElementById('azul');
let rojo= document.getElementById('rojo');
let verde = document.getElementById('verde');

azul.addEventListener('click', () => {
    document.body.style.background = 'blue';
});

rojo.addEventListener('click', () => {
    document.body.style.background = 'red';
});

verde.addEventListener('click', () => {
    document.body.style.background = 'green';
});