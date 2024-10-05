fetch("https://swapi.dev/api/people/1/")
.then((res)=>{
    console.log('RESOLVED :',res);
    return res.json();
})
.then((data)=>{
    console.log('DATA :',data);
    return fetch('https://swapi.dev/api/people/2');
})
.then((res)=>{
    console.log('RESOLVED :',res);
    return res.json();
})
.then((data)=>{
    console.log('DATA :',data);
})
.catch((err)=>{
    console.log('ERROR :',err);
})





const printStarWarsPeople = async (person)=>{
    try{
        let res = await fetch(`https://swapi.dev/api/people/${person}/`);
        let data = await res.json();
        console.log(data);
    }
    catch(err){
        console.log('ERROR :',err);
    }
}

printStarWarsPeople(1);
printStarWarsPeople(2);