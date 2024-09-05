// use the keyword this to access other properties on the same object

const cat = {
    name : 'Blue Steele',
    color : 'grey',
    breed : 'scottish fold',
    meow(){
        console.log(`This is : `,this);
        console.log(`${this.name} says MEOWWW`);
    }
}

cat.meow();

const meow2 = cat.meow;

meow2();