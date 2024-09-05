//Destructuring
// A short clean syntax to unpack
// -values from arrays
// -properties from objects
// into distinct variables

const scores = [100000,525244,65,25,14];

const highestScore = scores[0];
const secondHighest = scores[1];

const [highestScore1,secondHighest2,...rest] = scores;

console.log(highestScore);
console.log(secondHighest);
console.log(highestScore1);
console.log(secondHighest2);
console.log(rest);


//Destructuring Object
const user ={
    email : 'harvey@gmail.com',
    name : 'harvey',
    born : 1995,
    phone : 984736362
}

const {name, email} = user;
console.log(name);
console.log(email);

const { name : firstName , email : Email , place = 'NA'} = user;

console.log(firstName);
console.log(Email);
console.log(place);

//Destructuring Params --- prams stand for parameters of function

function detail({name , email}){
     console.log(`User name is : ${name}`);
     console.log(`User email is : ${email}`);
}

detail(user);
