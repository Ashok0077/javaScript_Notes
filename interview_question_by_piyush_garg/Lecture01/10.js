const obj1 = {
    name: "Ashok",
    sayName : function (){
      console.log(this.name);
    }
};
const obj2 = {
    name: "Jhon Doe",
    sayName : function (){
      console.log(this.name);
    }
};

obj1.sayName();
obj2.sayName();
obj2.sayName.call(obj1); //.call ke karan obj2 ke syName ke paas context obj1 ka hai


