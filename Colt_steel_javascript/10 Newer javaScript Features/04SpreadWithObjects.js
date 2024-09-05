const feline = { legs : 4, family : 'Felidae'};
const canine = {family : 'Canine', furry: true};

const dog = { ...canine, isPet : true};
const lion = {...feline, genus: 'panthera'};

const catDog = {...feline, ...canine}; // family is overriden here , lastly spreaded object will override

console.log(dog);
console.log(lion);
console.log(catDog);

// spreading array in object literal
console.log({...[7,8,9,10]});