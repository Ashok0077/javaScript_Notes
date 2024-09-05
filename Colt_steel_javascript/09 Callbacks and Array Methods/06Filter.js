//FILTER
//creates a new array with all elements that pass the test implemented by the provided function

const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

const odds = nums.filter(n => {
    return n%2 === 1;  // our callback returns true or false 
    //if it returns true, n is added to the filtered array
})

console.log(odds);

const movies =[
    {
        title : 'stand by me',
        score : 90
    },
    {
        title : 'joker',
        score : 85
    },
    {
        title : 'Endgame',
        score : 95
    },
    {
        title : 'Alien',
        score : 60
    },
    {
        title : 'Raaz',
        score : 70
    }
];

const goodMovies = movies.filter(movie => movie.score>=80);
const goodTitle = goodMovies.map(movie => (movie.title));

console.log(goodMovies);
console.log(goodTitle);
