//SPREAD
//Spread syntax allows an iterable such as an array to be expanded in places where zero or more arguments (for function calls ) or elements
// (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for oject literals)
// are expected

const nums = [28,16,47,18,39,96,392,191,293,92,3993,32];

console.log(Math.max(28,16,47,18,39,96,392,191,293,92,3993,32))
console.log(Math.max(nums));
console.log(Math.max(...nums));
console.log(Math.min(...nums));

console.log('hello');
console.log(...'hello');
console.log('h','e','l','l','o');