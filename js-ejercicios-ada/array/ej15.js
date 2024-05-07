function obtenerResultado(jugadoraA, jugadoraB, puntajesA, puntajesB){
    a = puntajesA.reduce((a,b)=> a+b, 0);
    b = puntajesB.reduce((a,b)=> a+b, 0);
    if(a>b){
        console.log('Gana', jugadoraA);
    } 
    else if (a==b){
        console.log('Empate');
    }
    else console.log('Gana ', jugadoraB);
}

obtenerResultado('Ada', 'Grace', [4, 4, 4], [1, 2, 3]);