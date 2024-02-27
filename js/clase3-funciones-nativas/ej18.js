function obtenerSubreddit(url){
    buscar = url.slice(25).replace(/\W/g, '');
    return buscar;
}

console.log(obtenerSubreddit('https://www.reddit.com/r/dankmemes/'));