// map also accept a callback function
// it does not mutate the array
// it return a new array

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

const double = numbers.map(function(num){
    return num*2;
})


console.log(double);