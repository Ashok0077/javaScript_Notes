//now AJAX is replaced with AJAJ

// what is JSON?
// - JSON is a format for storing and transporting data
// - JSON stands for JavaScript Object Notation

// How to use json.parse()?
// - json.parse() is a method that converts a JSON string into a JavaScript object

let jsonData = '{"name":"John","age":30,"city":"New York"}';
let obj = JSON.parse(jsonData);
console.log(obj);

// How to use json.stringify()?
// - json.stringify() is a method that converts a JavaScript object into a JSON string

 obj = {name: "John", age: 30, city: "New York"};
 jsonData = JSON.stringify(obj);
console.log(jsonData);