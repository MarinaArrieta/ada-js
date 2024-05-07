let barra = document.getElementById('barra');

let porcentaje = prompt('Ingrese el porcentaje de Progreso: ', 'Porcentaje...');

barra.style.background = 'orange';
barra.style.width = porcentaje + '%';