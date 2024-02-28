function puedeRenovarCarnet(pasoTests, tieneMultasImpagas, pagoImpuestos){
    return pasoTests==true && tieneMultasImpagas==false && pagoImpuestos==true;
}

console.log(puedeRenovarCarnet(true, false, true));