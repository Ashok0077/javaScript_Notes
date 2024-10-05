const jokesList = document.querySelector('.joke-list');
const button = document.querySelector('button');

const getjokes = async()=>{
    const config ={headers : {Accept : 'application/json'}};
    const res = await axios.get('https://icanhazdadjoke.com/',config);
    console.log(res);
    const newLi = document.createElement('li');
    newLi.innerText = res.data.joke;
    jokesList.append(newLi);
}

button.addEventListener('click', getjokes);

