// some and every are boolean methods, they return true or false


// let understand a senario in a elite school it is important for every student to pass to get promoted to next class
// so we have marks of all stuend and have to find is class is able to permoted or not

const marks = [86,83,90,75,85,92,69,82,98,77];
let shallPromoted = marks.every(score => score >= 75 );
console.log(`will class be promoted : ${shallPromoted}`);
shallPromoted = marks.some(score => score >= 75 );
console.log(`will class be promoted : ${shallPromoted}`);