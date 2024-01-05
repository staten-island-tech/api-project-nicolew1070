//goal: cick buttons to see characters from the different houses of harry potter 
import "../css/style.css";
import { DOMSelectors } from "./dom";

const URL = `https://api.disneyapi.dev/character?`;

async function getData(URL) {
  try {
    const response = await fetch(URL);
    if(response.status != 200) {
      throw new Error (response);
    } else {
      const data = await response.json();
      card(data.data); 
    }
    } catch (error) {
      console.log(error, "Invalid")
      document.querySelector("h3").textContent = "Error. Film is unavailable."
    }
 }
 getData(URL); 

/*  async function getData(URL) {
  const response = await fetch (URL);
  const data = await response.json();
  console.log(data);
 }
 getData(URL); */

function card(arr) {
  arr.forEach((item) => DOMSelectors.cards.insertAdjacentHTML(
      "beforeend",
      `<div class="card"> 
    <h2 class="title">${item.name}</h2> 
    <img class="img" src="${item.imageUrl}" alt="">
    <h3></h3>`
    )
  )
};

function clearfields () {
  DOMSelectors.search.value = "";
};

//does not work
DOMSelectors.form.addEventListener("click", function (event) {
 event.preventDefault();
 let search = DOMSelectors.search.value
 let newArr = data.filter((film) => film.films === search)
 card(newArr);
 clearfields();
});




/* let buttons = document.querySelectorAll(".btn")
buttons.forEach((btn) => btn.addEventListener("click", function () {
    let type = btn.textContent
    let newArr = data.filter((item) => item.films.includes(type))
    DOMSelectors.cards.innerHTML = ""
    card(newArr);
  })); */

//steam games api 

/* const URL = `https://www.cheapshark.com/api/1.0/deals?`;

async function getData(URL) {
  try {
    const response = await fetch(URL);
    if(response.status != 200) {
      throw new Error (response);
    } else {
      const data = await response.json();
      card(data); 
    }
    } catch (error) {
      console.log(error, "Invalid")
    }
 }
 getData(URL);

function card(arr) {
  arr.forEach((item) => DOMSelectors.cards.insertAdjacentHTML(
      "beforeend",
      `<div class="card"> 
    <h2 class="title">${item.title}</h2> 
    <img class="img" src="${item.thumb}" alt="">
    <h3>Sale Price: ${item.salePrice}</h3>
    <h3>Original Price: ${item.normalPrice}</h3>`
    )
  );
}

let buttons = document.querySelectorAll(".btn")
buttons.forEach((btn) => btn.addEventListener("click", function () {
    let type = btn.textContent
    let newArr = data.filter((item) => item.salePrice.includes(type))
    DOMSelectors.cards.innerHTML = ""
    card(newArr);
  })) */

/* DOMSelectors.all.addEventListener("click", function () {
  DOMSelectors.cards.innerHTML = ""
  card();
}) */

//const hist = books.filter((books)=>books.genre.includes('historical'));
//hist.forEach((books)=>console.log(books.name));