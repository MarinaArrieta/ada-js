function germinar(plantines){
    flor1 = plantines.replace(/🌷🌱/g, '🌷');
    flor2 = flor1.replace(/🌻🌱/g, '🌻🌻');
    flor3 = flor2.replace(/🌸🌱/g, '🌸');
    return flor3;
}
console.log(germinar('🌷🌱🌻🌱🌸🌱'));