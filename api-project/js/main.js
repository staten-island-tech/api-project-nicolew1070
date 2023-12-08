const URL = `https://api.disneyapi.dev/character`

async function getData(URL){
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
}
getData(URL);