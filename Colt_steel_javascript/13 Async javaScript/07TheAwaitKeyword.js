// what is await keyword?
// // await keyword is used to wait for a promise to resolve.

// const colorChange = async (color,delay)=>{
//      setTimeout(()=>{
//         document.body.style.backgroundColor = color;
//         return 'resolved';
//     },delay);
// }




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

