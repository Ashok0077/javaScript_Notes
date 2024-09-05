let heros = ['spiderman','ironman','superman','black panther','wonder woman'];

function bankRoberry(){
    function cryForHelp(){
        for(let hero of heros){
            console.log(`please, save us ${hero}`);
        }
    }
    cryForHelp();
}

bankRoberry();