//goal: cick buttons to see characters from the different houses of harry potter 
import "../css/style.css";
import { DOMSelectors } from "./dom";
const URL = `https://hp-api.onrender.com/api/characters`

//filters based on characters who are in Tangled -> gives the character name and film

/* DOMSelectors.slytherin.addEventListener("click", function () {
    if (document.body.classList.contains("freshy")) {
      document.body.classList.add("minty");
      document.body.classList.remove("freshy");
    } else {
      document.body.classList.add("freshy");
      document.body.classList.remove("minty");
    }
  });   */
// `https://hp-api.onrender.com/api/characters/house/hufflepuff`
// `https://hp-api.onrender.com/api/characters/house/slytherin`
// `https://hp-api.onrender.com/api/characters/house/gryffindor`
// `https://hp-api.onrender.com/api/characters/house/ravenclaw`

async function getData(URL){
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
  data.forEach((data)=> console.log(data))
}
getData(URL);

function all () {
  getData(URL).forEach((item) => DOMSelectors.cards.insertAdjacentHTML(
      "beforeend",
      `<div class="card"> 
    <h2 class="title">${item.name}</h2> 
    <img class="display-img" src="${item.img}" alt="">
    <h3>${item.house}</h3>
    <h3>${item.gender}</h3>`
    )
  );
}
all();

DOMSelectors.slytherin.addEventListener("click", function (){
  DOMSelectors.card.innerHTML = '';
  all ();
  });
   all();