function convertirEnAcronimo(str){
    return str.toUpperCase().split('').join('.')+'.';
}

console.log(convertirEnAcronimo('nasa'));