myFun();

// var myFun=function(){
//    console.log("first");
// }

function myFun(){
    console.log("first");
}

myFun();

 function myFun(){
    console.log("second");
}

myFun();

//idher bhi hoisting ka concept use hoga 
//isher bhi gloal execution interphase banege usme do phase hoge memory phase and code phase
//memory phase mai variable aur function aayege 
//aur is mai myFun ek variable hai aur jo second wala function hai vo uss mai initiallize ho jayega
//lain jab javascript run hoge tho first wala function muFun mai aa jayega aur myFun updateho jayega