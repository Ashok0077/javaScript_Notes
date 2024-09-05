const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }

//document.all -- give All the Html elements in form of array


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}

const allImages = document.getElementsByTagName('img');

for(let img of allImages){
    //console.dir(img);
    console.log(img.src)
}

const squareImages = document.getElementsByClassName('square');
for(let img of squareImages){
    console.log(img);
}
