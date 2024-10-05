// XMLHTTPRequest
// The XMLHttpRequest object is used to exchange data with a server behind the scenes.
// It is one of the most important objects for AJAX programming.
// The original way of sending requests via JS.
// Does not support promises, so...lots of callbacks.

const req = new XMLHttpRequest();

req.onload = function(){
    console.log('it loaded');
    const data = JSON.parse(this.responseText);
    console.log(data.name,data.height);
}

req.onerror = function(){
    console.log('error');
    console.log(this);
}


req.open('GET','https://swapi.dev/api/people/1/');
req.send();

