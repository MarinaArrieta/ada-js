function obtenerNota(puntaje){
    if (puntaje.toFixed(1) < 6){
        return 'Desaprobado';
    } else if (puntaje.toFixed(1) >= 6 && puntaje.toFixed(1) < 7){
        return 'Regular';
    } else if (puntaje.toFixed(1) >= 7 && puntaje.toFixed(1) < 8){
        return 'Bueno';
    } else if (puntaje.toFixed(1) >= 8 && puntaje.toFixed(1) < 10){
        return 'Muy bueno';
    } else if (puntaje == 10){
        return 'Excelente';
    } else if (puntaje.toFixed(1) < 0 || puntaje.toFixed(1) > 10)
        return 'Puntaje inválido';
}

console.log(obtenerNota(11));