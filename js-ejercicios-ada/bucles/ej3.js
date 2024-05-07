function sumarImparesHasta(numero){
    let impares = [];
    for(let i=1; i<=numero; i++){
        if (i % 2 != 0){
            impares.push(i)
            resultado = impares.reduce((a,b)=>a+b,0);
        }
    }
    return resultado;
}
console.log(sumarImparesHasta(13));