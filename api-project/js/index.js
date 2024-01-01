//goal: cick buttons to see characters from the different houses of harry potter 
import "../css/style.css";
import { DOMSelectors } from "./dom";
const URL = `https://www.cheapshark.com/api/1.0/deals?upperPrice=10&lowerPrice=5`;
async function getData(URL) {
  try {
    const response = await fetch(URL);
    if(response.status != 200) {
      throw error (response);
    } else {
      const data = await response.json();
      displayCharacters(data); 
    }
    } catch (error) {
      console.log(error, "Invalid")
    }
 }
 getData(URL);

function displayCharacters(arr) {
  arr.forEach((object) => DOMSelectors.cards.insertAdjacentHTML(
      "beforeend",
      `<div class="card"> 
    <h2 class="title">${object.title}</h2> 
    <img class="img" src="${object.thumb}" alt="">
    <h3>Sale Price: ${object.salePrice}</h3>`
    )
  );
}