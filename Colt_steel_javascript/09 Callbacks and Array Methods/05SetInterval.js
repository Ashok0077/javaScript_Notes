let i=1;
const id = setInterval(()=>{
    console.log(i++);

    if(i===11){
        clearInterval(id);
    }
},1000);

