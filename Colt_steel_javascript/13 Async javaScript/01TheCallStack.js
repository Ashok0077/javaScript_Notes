//what is call stack?
//it is a data structure that uses the Last In First Out (LIFO) principle to temporarily store and manage function invocation (call).

 const multiply = (x,y) => x*y;
 const square = x => multiply(x,x);

 const isRightTriangle = (a,b,c) =>{
    return square(a) + square(b) === square(c);

 }

 isRightTriangle(3,4,5);

 // you can use chrome dev tools to see the call stack
 //it is a stack of functions that are called in order to get to the final result
 //and also can use tools like loupe to see the call stack