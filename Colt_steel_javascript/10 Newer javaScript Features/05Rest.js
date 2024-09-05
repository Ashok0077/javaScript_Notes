//REST
//it look like spread, but it is not!

//The Arguments object
//Available inside every function.
//It's an array like object
//    - has a length property
//    - does not have array methods like push/pop and others.   // thatswhy we use rest
// Contains all the arguments passed to the function.
// not available inside of arrow functions!


// How rest is different from spead?
// using spread we are spreading thing out
// using rest we are collecting things

function sum(){
    console.log(arguments);
}

sum(1,2,3);

function raceResults(gold,silver,...everyoneElse){
    console.log(`Gold goes to ${gold}`);
    console.log(`Silver goes to ${silver}`);
    console.log(`Thanks to everyone : ${everyoneElse}`);
}

raceResults('Ashok','Pooja','montu','toney','chetak');