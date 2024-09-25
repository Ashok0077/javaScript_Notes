// querySelector and querySelectorAll is the new way for selecting things

// querySelector
// A newer, all in one method to select a single element.

//find first element with tag name h1
let result=document.querySelector('h1');
console.dir(result);

//find first id equal to red
result=document.querySelector('#red');
console.log(result);
result=document.querySelector('.big');
console.log(result);


result=document.querySelector('img:nth-of-type(2)'); // for selecting 2 image
console.log(result);


// we can also select with the help of attributes
result=document.querySelector('a[title="java"]');
console.log(result);


//querySelectorAll
//A newer, all in one method to select multiple elements.

//find all elements with tag name h1
result=document.querySelectorAll('h1');
console.log(result);

result=document.querySelectorAll('p a'); // for selecting all a tag inside p tag
console.log(result);

for(let item of result){
    console.log(item.href);
}