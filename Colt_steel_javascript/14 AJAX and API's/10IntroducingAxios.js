// what is Axios :-
// A library for making HTTP requests
// Axios is a promise-based HTTP client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests

const startWarPeoples = async(id) =>{
    try{
       const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
       console.log(res.data);       
    }
    catch(err){
        console.log(err);
    }
}

startWarPeoples(1);
startWarPeoples(2);
startWarPeoples(3);