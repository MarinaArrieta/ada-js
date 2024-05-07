function esVocal(letra) {
    if (letra == 'a' || letra == 'A'){
        return true
    } else if (letra == 'e' || letra == 'E') {
        return true
    } else if (letra == 'i' || letra == 'I') {
        return true
    } else if (letra == 'o' || letra == 'O'){
        return true
    } else if (letra == 'u' || letra == 'U') {
        return true;
    } else return false;
}

console.log(esVocal('e'));