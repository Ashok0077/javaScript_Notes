//Reduce
//Executes a reducer function on each element of the array, resulting in a single value
const array = [3,5,7,9,11].reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
});

// callback      accumulator       currentValue           return value
// first call        3                 5                      8
// second call       8                 7                      15
// third call        15                9                      24
// fourth call       24                11                     35

console.log(array);

// it is just not limited to addition and multiplication we can use it for finding smaller element in the array

const prices = [100,29,123,34,45,67,65452,133,44,55,98];

const minPrice = prices.reduce((minimum,currentValue)=>{
    if(minimum<currentValue) return minimum;
    return currentValue;
})

console.log(minPrice);

// there is 2nd argument we can give to reduce function , that is initial value for callback;

const number = [1,2,3,4];

const result = number.reduce((accumulator,currentValue)=>{return accumulator + currentValue},100) //it will add 10 ater 100

console.log(result);