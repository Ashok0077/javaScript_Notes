const obj1 = {
    name : "jhon Doe",
    sayName : function(){
        console.log(this.name);
    },
};

setTimeout(obj1.sayName,3*1000) 
// output : undefine , why? : setTimeout diffrently execute hota hai 

//difference between .call and .bind
//.call directle call the function with the object interface while .bind return a function
//.bind mainly use with setTimeout

setTimeout(()=>{obj1.sayName()},3*1000); // it work properly
setTimeout(obj1.sayName.bind(obj1),3*1000);