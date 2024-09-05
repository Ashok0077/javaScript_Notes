// querySelector and querySelectorAll is the new way for selecting things

// querySelector
// A newer, all in one method to select a single element.

//find first element with tag name h1
document.querySelector('h1');

//find first id equal to red
document.querySelector('#red');
document.querySelector('.big');


document.querySelector('img:nth-of-type(2)'); // for selecting 2 image

// we can also select with the help of attributes
document.querySelector('a[title="java]');