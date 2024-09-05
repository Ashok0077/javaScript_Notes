let i=1;

const myInterval=setInterval(()=>{
    console.log(i);
    i=i+1;

    if(i===11){
        clearInterval(myInterval);
    }
},1000);


