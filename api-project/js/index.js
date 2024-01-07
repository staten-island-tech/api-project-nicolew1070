import "../css/style.css";
import { DOMSelectors } from "./dom";

const URL = `https://api.disneyapi.dev/character?pageSize=1100`;  

async function getData(URL) {
  try {
    const response = await fetch(URL);
    if(response.status != 200) {
      throw error (response);
    } else {
      const data = await response.json();
      console.log(data);
      card(data.data);
      addcard(data.data); 
      thousand(data.data);
    }
    } catch (error) {
      console.log(error, "Invalid")
      document.querySelector("h2").textContent = "Error. Film is unavailable."
    }
 }
 getData(URL); 

function card(arr) {
  arr.forEach((item) => DOMSelectors.cards.insertAdjacentHTML(
      "beforeend",
      `<div class="card"> 
    <h2 class="title">${item.name}</h2> 
    <img class="img" src="${item.imageUrl}" alt="Picture of ${item.name}">`
    )
  )
};

function clearfields () {
  DOMSelectors.search.value = "";
};

function clear () {
  DOMSelectors.cards.innerHTML = "";
};

function addcard (arr) {
DOMSelectors.form.addEventListener("click", function (event) {
 event.preventDefault();
 let search = DOMSelectors.search.value
 let newArr = arr.filter((film) => film.films.includes(search))
 clearfields();
  clear();
  if (newArr.length === 0) {
    document.querySelector("h2").textContent = "No characters were found for the given film. Please try a different one.";
  } else {
    card(newArr);
  }
})}; 

function thousand (arr) {
  DOMSelectors.all.addEventListener("click", function () {
  clear();
  card(arr);
})};