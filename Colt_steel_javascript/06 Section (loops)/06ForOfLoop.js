//lovely For...of
//A nice and easy way of itrating over arrays or (other iterable objects) ---> this mean string

const cities = ['Jodhpur','Jaipur','Pokaran','Delhi','Mumbai'];

for(let city of cities){
    console.log(city);
}

let string = "Hello World!";

for(let char of string){
    console.log(char);
}

//Can for...of used with object
//remember one thing for...of is used with iterable and object is not iterable
