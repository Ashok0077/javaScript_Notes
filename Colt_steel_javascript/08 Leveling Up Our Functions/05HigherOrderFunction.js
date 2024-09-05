// Higher order functions
// functions that operate on/with other functions.
//  They can:
//        -accept other functions as arguments
//        -return a function


//ACCEPT OTHER FUNCTION AS AN ARGUMENT


function callTwice(func){
   console.log(`func value : ${func}`);
    func();
    func();
}

function rollDie(){
    let number =  Math.floor(Math.random()*6)+1;
    console.log(number);
    //return number;
}

callTwice(rollDie);
//callTwice(rollDie()); // can not use this because it first execite the rollDie and pass undefine value to func

//RETURNING FUNCTION

// console.log('New line');

// let arr = function (){
//     return [1,2,3,4,6,7];
// }

// console.log(arr());

function makeMysteryFunc(){
    const rand = Math.random();
    if(rand > 0.5){
        return function(){
            console.log('Congrats, I am a good function!');
            console.log('you win a million dollars!');
        }
    }
    else{
        return function(){
            alert('You have been infected by the computer virus!');
            alert('stop closing window');
            alert('You have been infected by the computer virus!');
            alert('stop closing window');
            alert('You have been infected by the computer virus!');
            alert('stop closing window');
            alert('You have been infected by the computer virus!');
            alert('stop closing window');
            alert('You have been infected by the computer virus!');
            alert('stop closing window');
            alert('You have been infected by the computer virus!');
            alert('stop closing window');
        }
    }
}

// we want to make three fi=unction in which it check if some one is chile or is adult or is senior
// for this we buid a factory function

function makeBetweenFun(min,max){     // factory function
     return function(num){
        return num>=min && num <=max;
     }
}

const isChild = makeBetweenFun(0,18);
const isAdult = makeBetweenFun(19,60);
const isSenior = makeBetweenFun(61,100);

console.log(isAdult(17));
console.log(isAdult(33));
console.log(isAdult(78));
