function estanJuntos(personajes){
    for (let i=0; i<personajes.length; i++){
        if((personajes[0] == 'Sam' && personajes[1] == 'Frodo') ||
            (personajes[0] == 'Frodo' && personajes[1] == 'Sam') ||
            (personajes[1] == 'Frodo' && personajes[2] == 'Sam') ||
            (personajes[2] == 'Frodo' && personajes[1] == 'Sam')
        ){
            return true;
        }
    }
    return false;
}

console.log(estanJuntos(['Orco', 'Sam','Frodo']) );