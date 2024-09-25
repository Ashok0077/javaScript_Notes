// what is async function?
// A newer and cleaner syntax for working with async code.
// syntax makeup for promises
// it is a function that returns a promise


// Async function always return a promise.
// if the function returns a value, the promise will be resolved with that value.
// if the function throws an error, the promise will be rejected with that error.

async function hello(){
    return "hello";
}

async function hii(){
}
console.log(hello());
console.log(hii());

hii().then(()=>{
    console.log("resolved");
})


const sing = async ()=>{
    throw "Oh no error!";
}

sing().then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});


// LOGIN functionality

const login = async (username,password)=>{
    if(!username || !password) throw 'Missing credentials';
    if(password === 'password') return 'Login successful';
    throw 'Invalid credentials';
}

login('username','password').then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})