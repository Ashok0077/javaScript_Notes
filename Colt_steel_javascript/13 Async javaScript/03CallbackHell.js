console.log("hello!!");

// document.body.style.backgroundColor = 'red';
// document.body.style.backgroundColor = 'orange';

//  setTimeout(()=>{
//      document.body.style.backgroundColor = 'green';
//  },1000);
//  setTimeout(()=>{
//      document.body.style.backgroundColor = 'blue';
//  },2000);

// setTimeout(()=>{
//      document.body.style.backgroundColor = 'green';
//      setTimeout(()=>{
//           document.body.style.backgroundColor = 'blue';
//           setTimeout(()=>{
//                document.body.style.backgroundColor = 'red';
//                setTimeout(()=>{
//                     document.body.style.backgroundColor = 'yellow';
//                     setTimeout(()=>{
//                          document.body.style.backgroundColor = 'purple';
//                     },1000);
//                },1000);
//           },1000);
//      },1000);
// },1000);

function changeColor(color, delay, next) {
  setTimeout(() => {
    document.body.style.backgroundColor = color;
    next();
  }, delay);
}

changeColor("red", 1000, () => {
  changeColor("orange", 1000, () => {
    changeColor("yellow", 1000, () => {
      changeColor("green", 1000, () => {
        changeColor("blue", 1000, () => {
          changeColor("purple", 1000, () => {});
        });
      });
    });
  });
});
