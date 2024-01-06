import "../css/style.css";
import { DOMSelectors } from "./dom";

const URL = `https://api.disneyapi.dev/character?pageSize=1000`;

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