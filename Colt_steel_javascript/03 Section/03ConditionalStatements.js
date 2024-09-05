//conditional statements
// if statement

let rating=5;
if(rating===5){
    console.log("your are a surperstar");
}

// else-if and else 

if(rating===5){
    console.log("you are a superstar");
}
else if (rating===4){
    console.log("you are not a star");
}
else{
    console.log("increase your rating");
}


//Nesting Condition

const password = "Ashok Vaishnav";

if(password.length>=6){
    if(password.indexOf(' ') === -1){
        console.log("Valid Password");
    }
    else{
        console.log("password can not contain spaces!")
    }
}else{
    console.log("password is too short");
}

// truth-y & false-y
//All js values have an inherent truthyness or falsyness about them
//Falsy values:-
//false
//0
//""
//null
//undefined
//NaN
//Everything else is truthy

