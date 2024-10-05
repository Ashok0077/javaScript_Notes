// what is await keyword?
// // await keyword is used to wait for a promise to resolve.

// const colorChange = async (color,delay)=>{
//      setTimeout(()=>{
//         document.body.style.backgroundColor = color;
//         return 'resolved';
//     },delay);
// }

const colorChange = async (color,delay)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor = color;
            resolve('resolved');
        },delay);
    })
}




    async function rainbow() {
      await colorChange("red", 1000);
      await colorChange("orange", 1000);
      await colorChange("yellow", 1000);
      await colorChange("green", 1000);
      await colorChange("blue", 1000);
      await colorChange("indigo", 1000);
      await colorChange("violet", 1000);
    }
  
    rainbow();




// fake request server

let fakeRequest = (url)=>{
    return new Promise((resolve,reject)=>{
        let delay = Math.floor(Math.random()*2000);
        if(delay>1000){
            reject("Request timed out");
        }else{
            resolve(`Here is your data from ${url}`); 
        }
        }
    )
};

async function makeTwoRequest(){
    try{
        let data1 = await fakeRequest('google.com');
        console.log(data1);
        let data2 = await fakeRequest('facebook.com');
        console.log(data2);
    }catch(err){
        console.log(err);
    }
}

makeTwoRequest();