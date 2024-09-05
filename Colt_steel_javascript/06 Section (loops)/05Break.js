
let input = prompt("say something");

while(true){
    input = prompt(input);
    if(input==="stop copying me"){
        break;
    }
}

console.log("ok, you win!!");