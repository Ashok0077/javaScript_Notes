    const fakeRequest = (url)=>{
        return new Promise((resolve,reject)=>{
            let delay = Math.floor(Math.random()*2000);
            setTimeout(()=>{
                if(delay <= 1000){
                    resolve("Here is your fake data from " + url);
                }else{
                    reject("Error: Timeout");
                }
            },delay);

        });
    }

   fakeRequest("anyUrl").then((data)=>{
    console.log("Promise resolved " + data);
   }) 
   .catch((error)=>{
    console.log("Promise rejected " + error);
   });


   const colorChanger = (color,delay) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor = color;
            resolve();
        },delay);
    })
   }

   colorChanger("red",1000).then(()=>{
    return colorChanger("orange",1000);
   }).then(()=>{
    return colorChanger("yellow",1000);
   }).then(()=>{
    return colorChanger("green",1000);
   }).then(()=> colorChanger("blue",1000))
   .then(()=> colorChanger("indigo",1000))
   .then(()=> colorChanger("violet",1000))