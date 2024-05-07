// function removerDuplicados(array){
//     let filtrados = []
//     for (i=0; i<array.length; i++){
//         if(!filtrados.includes(array[i])){
//             filtrados.push(array[i])
//         }
//     }
//     return filtrados;
// }

function removerDuplicados(array){
    conjuto = new Set(array);
    let result = [...conjuto];
    return result
}

console.log(removerDuplicados([13, 1, 2, 2, 3, 3,1,5]))