const URL = `https://api.quotable.io/random`

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
        document.querySelector("h1").textContent = data.content;
        document.querySelector("h2").textContent = data.author;
    } catch (error) {
        document.querySelector("h1").textContent = error;
        document.querySelector("h1").textContent = 
            "Please search for something else";
    }
}
getData(URL);