const add = function(x,y){
    return x+y;
}

console.log(add(5,6));

let obj = {
    sub : function(x,y){
        return x-y;
    }
}

console.log(obj.sub(10)); // this will not give a error , ouput for this is NaN;
console.log(obj.sub(8,9));
console.log(10-undefined);
console.log(10-'hello');