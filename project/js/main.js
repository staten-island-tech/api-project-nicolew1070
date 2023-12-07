//import "./css/style.css"

async function getData(){
    let response = await fetch();
    let data = await response.json();
    //data.results.forEach((movie)=>console.log(movie));
    console.log(data);
    }
getData();