const URL = `https://api.disneyapi.dev/character?films=Tangled`
//filters based on characters who are in Tangled -> gives the character name and film 

async function getData(URL){
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
}
getData(URL);