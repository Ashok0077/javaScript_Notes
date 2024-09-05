const obj = {
    height : 30
}

// const obj = Object.create( {
//     height : 30
// })
// when we define object inside Object.create() then all properties of object goes to prototype section then use of delete keyword not fork

console.log(obj.height);

delete obj.height;

console.log(obj.height);