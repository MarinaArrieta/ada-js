function puedeGraduarse(asistencia, materiasAprobadas, tesisAprobada){
    return asistencia >= 75 && materiasAprobadas >= 50 && tesisAprobada == true;
}

console.log(puedeGraduarse(80, 50, true));