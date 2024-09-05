//where we have define the variable impact where we have the visiblity
function collectEggs(){
    let totalEggs = 6;
}

collectEggs();
//console.log(totalEggs); // throw erre that totalEggs is not defined


//function scope example
let bird = 'lovely sparrow'

function birdWatch(){
   // console.log(bird); // witch below two line this will give error that bird is used before initialization
    let bird = 'pea cock';
    console.log(bird);
}

birdWatch();
console.log(bird);
