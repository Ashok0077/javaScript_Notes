const testScore = {
  jhon: 89,
  sam: 76,
  jim: 97,
  ray: 67,
  kie: 100,
};

// for...in loop not for...of
for(let key in testScore){
    console.log(`${key} score is ${testScore[key]}`);
}

console.log(testScore.length); // object do not have length
console.log(Object.keys(testScore)); // give array of keys
console.log(Object.values(testScore)); // give array of values;
console.log(Object.entries(testScore)); // give multidimensional array of object


// totaling the marks
let totalScore=0;
for(let score of Object.values(testScore)){
    totalScore+=score;
}

console.log(totalScore);
