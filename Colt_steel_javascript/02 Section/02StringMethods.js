//methods are inbuilt actions we can perform with individual strings.
// they help us do thingd like
// searching within a string
// replacing part of a string
// changing the casing of a string

// length is not method in string

//non destructive method
//toUpperCase in js ,but in c++ toupper()
//toLowerCase in js ,but in c++ tolower()

let string = "my name is ASHOK";
console.log(string.toUpperCase());
console.log(string.toLowerCase());
console.log(string);


// trim is also not destructive
//trim() to remove spaces

let userInput= "     my name     is       ashok           ";
console.log(userInput.trim()); // only remove left and right space
console.log(userInput);


// string Method with Argument

let tvShow = 'catdog';

console.log(tvShow.indexOf('cat'));
console.log(tvShow.indexOf('dog'));
console.log(tvShow.indexOf('z'));

let msg = "haha that is so funny";
let sliceMsg = msg.slice(5);
let sliceMsgTill14 = msg.slice(5,15);
console.log(msg);
console.log(sliceMsg);
console.log(sliceMsgTill14);

//this is important
console.log(msg.slice(-2)); // gives last two character


//replace() :- its a also non destructive method
let annoyingLaugh = "teehee so funny! teehee";
let perfectLaugh = annoyingLaugh.replace('teehee','haha');

console.log(annoyingLaugh);
console.log(perfectLaugh);


//repeat is also a method

console.log('Ashok Vaishnav '.repeat(5));

// Template Literals :- Template Literals are strings that allow embedded expressions, which will be evaluated and then turned 
// into a resulting string

let product = "Apples";
let quantity = 7;

console.log(`you bought ${quantity} ${product}`); // we have to use back ticks not single quotes
