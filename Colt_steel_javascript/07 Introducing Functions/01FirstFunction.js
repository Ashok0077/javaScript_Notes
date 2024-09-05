
function singSong(){
    console.log('DO');
    console.log('RE');
    console.log('MI');
}

singSong()

//Arguments - arguments are input to the function.


function greet(person){
    console.log(`Hii, ${person}!`);
}

greet('Ashok'); // it is also calling the function with two variable 

//function with multiple arguments
function greet(firstName , lastName){
    console.log(`Hii, ${firstName} ${lastName}!`);
}

greet('Ashok', 'Vaishnav');