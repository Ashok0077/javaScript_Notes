//Push - add to end
//pop - remove from end
//shift - remove from start
//unshift - add to start

let movieLine = ['tom','nancy'];
movieLine.push('ashok');
console.log(movieLine);
// movieLine.pop();
// console.log(movieLine);
movieLine.shift();
console.log(movieLine);

console.log("an old lady name Oliva comes");

movieLine.unshift('Oliva');

console.log(movieLine);

//concat - merge two arrays  --- form new third array
//includes - look for a value
//indexOf - just like string indexOf;
//join - creates a string from an array
//reverse - reverses an array ----- it is a destructive method
//slice - copies a portion on an array
//splice - removes/replaces elements
//sort - sorts an array

let cats=['blue','kitty'];
let dogs=['rusty','wyatt'];

let comboParty = cats.concat(dogs);
console.log(comboParty);

console.log(cats.includes('blue'));


//slice and splice
let colors = ['red','orange','yellow','green','blue','indigo','violet'];
console.log(colors.slice(3));
console.log(colors.slice(3,5));   //slice(?start,?end)

//IMPORTANT
//How to get last 3 elements
console.log(colors.slice(-3));

//splice syntax 
// array.splice(start,Number of element to delete,itme1,item2,item3...);
// splice is destructive , it changes in the array;

colors.splice(1,1,'indigo','violet');
console.log(colors);
colors.splice(1,0,'orange');
console.log(colors);
colors.splice(2,2);
console.log(colors);

//sort
let array = [1,70,100,2500,9,-12,0,34];
array.sort();
console.log(array); //unexpected answer  UTF-16