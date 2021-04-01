// Js selectors

//1. getElemtsByClassName - array
// const content = document.getElementsByClassName("content");
// console.log(content);

//2. getElementsByTagName - array
//3. getElementById - singular

//Recommended selectors
//.1 document.querySelector - singular
//2. document.querySelctorAll - plural

//Setting and getting attributes
//1. Get attribute
// const initialDiv = document.querySelector("div");
// let initialDivAttr = initialDiv.getAttribute("class");
// console.log(initialDivAttr);

//2. Set attribute
//document.setAttribute("content", "wooow");

// const li = document.querySelector("li");
// console.log(li);
// const random = li.getAttribute("random");
// // console.log(random);
// li.setAttribute("random", "90000000");

// Changing styles
//old way is to do this li.style.background = "red". This does not meet separation of concerns

//BETTER WAY OF STYLING
const h1 = document.querySelector("h1");
h1.className = "coolTitle";

//To check a list of classses use classList
//classList.add - use to add a new class
// classList.remove("done") - use to remove a class
//classList.toggle('done') - use to turn on or off

const li = document.querySelector("li");

li.addEventListener("click", () => {
  li.classList.toggle("done");
});

//we can also select the children and parentElement of items on a page

// It is very important for us to cache selectors

const bgChanger = document.querySelector("#bg-toggle");
const body = document.getElementsByTagName("body")[0];
console.log(body);

bgChanger.addEventListener("click", function () {
  body.classList.toggle("dark");
});

//How to insert a text in between a created element
li.appendChild(document.createTextNode("The Lord is good"));
