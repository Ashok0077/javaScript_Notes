// function and object insersect to form a method
// we can add functions as properties on objects. we call them method


//Example of method
const math = {
    add : function(a,b){
       return a+b;
    },
    multipy : function(a,b){
        return a*b;
    },
    cube (a){                  //in new javascript we can make function in object likethis we do not have to define it as key value pair
        return a**3;
    }
}

console.log(math.multipy(2,5));
console.log(math.cube(5));

//arrays are object in javascript;
//it is not important that we can access object with . only

console.log(math['multipy'](5,6));