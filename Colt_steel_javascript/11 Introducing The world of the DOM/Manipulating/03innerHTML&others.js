//innerHTML :--> innerHTML is a property of the Element interface that returns the HTML content of the element as a string.
//innerHTML is read-only, but you can set it to change the content of an element.
//innerHTML is used to set the content of an element, but it is not recommended to use it to set the content of an element because it can be unsafe and can cause security issues.

let result = document.querySelector('p');
console.log(result.innerHTML);  
console.log(result.innerText);
console.log(result.textContent);
result.innerHTML ='<h1>This is a new text</h1>';
result.innerText = 'This is a new text2';

// difference between innerText and innerHTML
// innerText: It is used to get the text content of an element.
// innerHTML: It is used to get the HTML content of an element.

//difference between innerText and textContent
//interText does not show that para tag for whose diaplay is set as none but textContent will
// innerText: It is used to get the text content of an element.
// textContent: It is used to get the text content of an element.

const allLinks = document.querySelectorAll('a');

for (let link of allLinks) {
    link.innerText = 'I AM A LINK!!!!'
}

result = document.querySelector('h1');
result.innerHTML += '<sup>2</sup>'