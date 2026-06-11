// DOCUMENT OBJECT MODEL

// DOM (Document Object Model) allows JavaScript to access and manipulate HTML elements
// Example: document.getElementById("id") selects an element by its ID
// Common actions: change text, update styles, add/remove elements
// DOM makes web pages dynamic and interactive

// 1. getElementById() → selects element by unique ID
const heading = document.getElementById("title");
heading.style.color = "blue"; // changes <h1> text color

// 2. getElementsByClassName() → selects all elements with given class
const paras = document.getElementsByClassName("text");
paras[0].style.fontWeight = "bold"; // first <p> becomes bold
paras[1].style.color = "green";     // second <p> turns green

// 3. getElementsByTagName() → selects all elements with given tag
const divs = document.getElementsByTagName("div");
divs[0].innerHTML = "Changed First Div!"; // updates text of first <div>
divs[1].style.backgroundColor = "yellow"; // adds background color to second <div>

// 4. querySelector() / querySelectorAll() → uses CSS selectors
const button = document.querySelector("#btn"); // selects button by ID
button.addEventListener("click", () => {
  // querySelectorAll returns NodeList (can use forEach)
  const allParas = document.querySelectorAll(".text");
  allParas.forEach(p => p.style.fontSize = "20px"); // increases font size of all <p>
});
