/* function burlarse(str) {
    burla = str.replaceAll('a', 'i')
    burla = burla.replaceAll('e', 'i')
    burla = burla.replaceAll('o', 'i')
    burla = burla.replaceAll('u', 'i')
    return burla;
} */

function burlarse(str){
   return burla = str.replace(/[aeou]/ig, 'i'); 
}

// Entre el slash va lo que se quiere reemplazar, i es sensitive case, g indica global, la 'i' indica el reemplazo

console.log(burlarse('programar es aaa uuu'));