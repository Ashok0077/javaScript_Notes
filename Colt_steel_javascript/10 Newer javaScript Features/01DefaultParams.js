function rollDie(numSides = 6){
    return Math.floor(Math.random()*numSides)+1;
}
console.log(rollDie(50));
console.log(rollDie());
