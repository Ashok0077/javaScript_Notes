// arrow function allow us to write function without using function keyword
const square = function(x){
    return x*x;
}

const newSquare = (x) =>{
    return x*x;
}

const withoutSquare = x =>{
    return x*x;
}

console.log(square(5));
console.log(newSquare(5));
console.log(withoutSquare(6));

// new topic :- implicit return
// implicit return syntax ()=>();

const rollDie = ()=>(
    Math.floor(Math.random()*6)+1
);

console.log(rollDie());
console.log(rollDie());
console.log(rollDie());

const isEven = num => num%2===0; //one line implicit return

console.log(isEven(2));
console.log(isEven(3));