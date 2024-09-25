//what are attributes?
// -attributes are extra pieces of information that we can add to an element.
// -they are always in the form of a name and a value.
// class and id are also attributes

const firstLink = document.querySelector('a');
console.log(firstLink.href);
console.log(firstLink.getAttribute('href'));
firstLink.setAttribute('href','https://www.google.com');
