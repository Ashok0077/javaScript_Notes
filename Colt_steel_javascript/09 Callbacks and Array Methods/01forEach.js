const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

//forEach accept callback

function print(element){
    console.log(element);
}

numbers.forEach(print);

numbers.forEach(function (element){
     console.log(element);
})

numbers.forEach((element)=>{
    console.log(element);
})

// IMPORTANT  :- now forEach(passFunction) is not used instead this for...of is prefered;

const movies = [
    {
        name : 'stand by me',
        score : 90
    },
    {
        name : 'chota bheem',
        score : 80
    }
];

movies.forEach(function(movie){
    console.log(movie);
})