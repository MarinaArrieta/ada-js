let tmp = document.getElementById('tmp');

grados = prompt('Ingrese una temperatura: ', 'Temperatura...');

if (grados < 0){
    tmp.textContent = 'Temperatura actual: '+grados+' °';
    tmp.style.background = '#0502E8';
    document.body.style.background = '#7489EB';
} else if(grados >=0 && grados<15){
    tmp.textContent = 'Temperatura actual: '+grados+' °';
    tmp.style.background = '#7489EB';
    document.body.style.background = '#A3B6EB';
} else if(grados >=15 && grados<25){
    tmp.textContent = 'Temperatura actual: '+grados+' °';
    tmp.style.background = '#02E899';
    document.body.style.background = '#B4EABC';
} else if(grados >=25 && grados<30){
    tmp.textContent = 'Temperatura actual: '+grados+' °';
    tmp.style.background = '#EADF1E';
    document.body.style.background = '#EBE19E';
} else if(grados >=30 && grados<35){
    tmp.textContent = 'Temperatura actual: '+grados+' °';
    tmp.style.background = '#EB8D12';
    document.body.style.background = '#E8CC50';
} else if(grados>35){
    tmp.textContent = 'Temperatura actual: '+grados+' °';
    tmp.style.background = '#EA2B0E';
    document.body.style.background = '#EB8A86';
}