let chica = document.getElementById('chica');
let mediana = document.getElementById('mediana');
let grande = document.getElementById('grande');
let img = document.getElementById('img');

chica.addEventListener('click', ()=> {
    img.style.width = '200px';
});

madiana.addEventListener('click', ()=> {
    img.style.width = '500px';
});

grande.addEventListener('click', ()=> {
    img.style.width = '800px';
});