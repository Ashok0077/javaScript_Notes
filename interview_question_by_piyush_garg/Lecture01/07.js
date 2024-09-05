variable = 10;

//syntax of iife
// (()=>{})()

(()=>{
  foo=100;
  console.log(variable);
  var foo=100;
  variable=20;
  console.log(variable);
})()    

//console.log(foo);  only this line will give error if  we remove it there will be no error
console.log(variable);
var variable=30;