var variable=10;


// iife : imediately invoked function expression
(()=>{
   console.log(variable);
   variable=20;
   console.log(variable);
}
)();

console.log(variable);
var variable=30;

console.log(variable);