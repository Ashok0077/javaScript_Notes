//Objects
//Objects are collections of properties
//properties are a key value pair
//Rather than accessing data using an index, we use custom keys.

//property = key + value

const person = {
    firstName : 'Ashok',
    lastName : 'Vaishnav',
    18 : 'age'
} 

// how we can access object
// with the help of .(dot) and objectName['key Name']
console.log(person);
console.log(person['firstName']);
console.log(person.lastName);
console.log(person[18]);

const personalDetails = {
    firstName : 'Jon',
    lastName : 'Doe',
    address : {
        houseNumber : 48,
        landmark : 'new york park'
    }
}

console.log(`your name is ${personalDetails.firstName} ${personalDetails.lastName}`);
console.log(`your address is House number ${personalDetails.address.houseNumber} , near ${personalDetails.address.landmark}`);


console.log("||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");
const midterms = {danielle: 96 , thomas : 78};
midterms.thomas = 79;
console.log(midterms);

console.log("how to add something in object ?");

midterms.jhon = 88;
console.log(midterms); 