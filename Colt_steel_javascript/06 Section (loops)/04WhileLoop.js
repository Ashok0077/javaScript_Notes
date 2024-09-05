// generaly use in gamming game never end until someone won

let player1Won = false;
let player2Won = false;
let steps=0;


while(!player1Won && !player2Won){

   console.log(`step ${steps}`) 
   if(steps===10){
    console.log("Player 1 Won!!!!!!!");
    player1Won=true;
   }
   
   steps++;

}

