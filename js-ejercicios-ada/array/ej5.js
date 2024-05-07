function gano(tragamonedas){
    let simbolo = tragamonedas[0]
    for (let i=1; i<5; i++){
        if (simbolo != tragamonedas[i]){
            return false
        }
    }
    return true
}

console.log(gano([',', '💫', '💫', '💫', '💫']));