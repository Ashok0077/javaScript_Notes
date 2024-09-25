// function fakeRequestCallback(url, success, fail) {
//   let delay = Math.floor(Math.random() * 2000);
//   setTimeout(function () {
//     if (delay <= 1000) {
//       success("Here is your fake data from " + url);
//     } else {
//       fail("Error: Timeout");
//     }
//   }, delay);
// }

// fakeRequestCallback(
//   "book.com/page1",
//   (data) => {
//     console.log("IT WORKED FOR FIRST REQUEST!!");
//     console.log(data);
//     fakeRequestCallback(
//       "book.com/page2",
//       (data) => {
//         console.log("IT WORKED FOR SECOND REQUEST!!");
//         console.log(data);
//         fakeRequestCallback(
//           "book.com/page3",
//           (data) => {
//             console.log("IT WORKED FOR THIRD REQUEST!!!");
//             console.log(data);
//           },
//           (error) => {
//             console.log("IT FAILED FOR THIRD REQUEST!!!");
//             console.log(error);
//           }
//         );
//       },
//       (error) => {
//         console.log("IT FAILED FOR SECOND REQUEST!!");
//         console.log(error);
//       }
//     );
//   },
//   (error) => {
//     console.log("IT FAILED FOR FIRST REQUEST!!");
//     console.log(error);
//   }
// );

let fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    let delay = Math.floor(Math.random() * 2000);
    setTimeout(() => {
      if (delay <= 1000) {
        resolve("Here is your fake data from " + url);
      } else {
        reject("Error: Timeout");
      }
    }, delay);
  });
};

// now go to console and try to run fakeRequestPromise("anyUrl")
// store it into a variable and then try to console.log(variable)
// it will return a promise

//a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function


// BETTER SYNTEX THAN CALLBACK

// let request = fakeRequestPromise("book.com/page1");

// request
//   .then((data) => {
//     console.log("IT WORKED!!!");
//     console.log(data);
//     fakeRequestPromise("book.com/page2")
//       .then((data) => {
//         console.log("IT WORKED FOR SECOND REQUEST!!");
//         console.log(data);
//         fakeRequestPromise("book.com/page3")
//           .then((data) => {
//             console.log("IT WORKED FOR THIRD REQUEST!!!");
//             console.log(data);
//           })
//           .catch((err) => {
//             console.log("IT FAILED FOR THIRD REQUEST!!!");
//             console.log(err);
//           });
//       })
//       .catch((err) => {
//         console.log("IT FAILED FOR SECOND REQUEST!!");
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log("IT FAILED!!!");
//     console.log(err);
//   });


fakeRequestPromise('book.com/page1')
.then((data)=>{
    console.log('IT WORKED!!');
    console.log(data);
    return fakeRequestPromise('book.com/page2');
})
.then((data)=>{
    console.log('IT WORKED FOR SECOND REQUEST!!');
    console.log(data);
    return fakeRequestPromise('book.com/page3');
})
.then((data)=>{
    console.log('IT WORKED FOR THIRD REQUEST!!');
    console.log(data);
})
.catch((err)=>{
    console.log('IT FAILED!!');
    console.log(err);
})