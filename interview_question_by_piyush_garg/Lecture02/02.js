function a(){
    console.log("A");
}

//task queue
setTimeout(() => console.log("B"),0);

a();

console.log("C");

//micro task queue
Promise.resolve().then(() => console.log("D"));


// type javaacript visualizer in gogglw and see that website it will help you to understand the flow

