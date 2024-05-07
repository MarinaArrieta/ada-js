function obtenerChatStatus(usuarias){
    if (usuarias.length == 1){
        console.log(usuarias + ' esta conectada');
    }else if (usuarias.length > 1 && usuarias.length < 3){
        console.log(usuarias + ' están conectadas');
    }else if (usuarias.length > 2){
        let x = (usuarias.length) - 2; 
        console.log(usuarias[0]+ ', ' + usuarias[1] +' y ' + x + ' persona(s) más están conectadas');
    }
}

obtenerChatStatus(['Ada', 'Grace', 'Marie', 'Hola', 'Grace']);