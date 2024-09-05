//with const keyword in aeeay the values can change 
// As long as the reference remains the same

const nums =[1,2,3];   // due to const reference does not change 
//nums=[1,2,3,4,5]; //this will give error
nums.push(4);
console.log(nums);
nums.splice(1,2);
console.log(nums);