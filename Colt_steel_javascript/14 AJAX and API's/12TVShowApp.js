// TVMAZE API

const form = document.querySelector('#searchForm');
const showsList = document.querySelector('.tv_show_list');

form.addEventListener('submit', async ()=>{
    event.preventDefault();
    const searchQuery = form.elements.selectMe.value;
    // if i stated name = "query" than i can use form.query.value
    //console.log(searchQuery);
    
   try {
    // const res = await axios.get(` https://api.tvmaze.com/search/shows?q=${searchQuery}`);
    const config = {params : {q : searchQuery}};
    const res = await axios.get('https://api.tvmaze.com/search/shows',config);

    showsList.innerHTML = '';

    const shows = res.data;
     
    shows.map((show)=>{
        const img = document.createElement('img');
        img.src = show.show.image.medium;
        showsList.append(img);
    })

    // console.log(res.data[0].show.image.medium);

    // const img = document.createElement('img');
    // img.src = res.data[0].show.image.medium;
    // showsList.append(img);
    
   } catch (error) {
     console.log(error);
   }

})