function yell(msg){
    try{
        console.log(msg.toUpperCase().repeat(3));
    }
    catch(e){
        //console.log(e);
        console.log('Please enter a string next time.');
    }
}

yell('Hello');
yell(67);

console.log('hii');
console.log(mid); // In JavaScript, the code executes line by line, and if an error occurs, it stops execution at that point. 
console.log('bye')