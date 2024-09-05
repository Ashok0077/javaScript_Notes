function fun() {
  let a = 5;
  var total=10;
  console.log(total);
  if (a === 5) {
    let b = 3;
    const c = 2;
    var total = 5;
  }

  console.log(a);
  // console.log(b);  // we cant access b and c because b and c are block  scoped because it is defined using let and const
  // console.log(c);  //
  console.log(total); // we can access total because it is defined using var and var is function scoped
  console.log("HII");
}

fun();
console.log('outside function');
//console.log(total); // this will give error