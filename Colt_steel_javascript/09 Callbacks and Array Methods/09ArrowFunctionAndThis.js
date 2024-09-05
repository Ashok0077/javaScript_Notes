const person = {
    firstName : 'Ashok',
    lastName : 'Vaishnav',
    fullName: function (){
        return `${this.firstName} ${this.lastName}`;
    },
    fullName2 : ()=>{
        //inside arrow function this refer to window object or global object
        return `${this.firstName} ${this.fullName}`;
    }
}

console.log(person.fullName());
console.log(person.fullName2());