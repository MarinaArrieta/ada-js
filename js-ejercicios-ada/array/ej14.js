function sonIguales(a, b){
    return a.length === b.length && a.every((value, index) => value === b[index]);
}

console.log(sonIguales([10, 25, 6, 33, 48, 105], [11, 25, 6, 33, 48, 105]));