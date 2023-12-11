//goal: by typing in a Disney film, it can filter and show the corresponding cards for that film 
import "../css/style.css"

const URL = `https://api.disneyapi.dev/character?films=Tangled`
//filters based on characters who are in Tangled -> gives the character name and film 

async function getData(URL){
    try {
        const response = await fetch(URL);
        console.log(response);
        if (response.status !=200) {
            throw new Error(response.statusText);
        }
        //take response from server and convert it to JSON
        const data = await response.json();
        console.log(data);
        document.querySelector("h1").textContent = data.name;
        document.querySelector("h2").textContent = data.films;
    } catch (error) {
        document.querySelector("h1").textContent = "Please search for something else";
    }
}
getData(URL);