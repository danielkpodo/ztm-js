// Js selectors

//1. getElemtsByClassName - array
const content = document.getElementsByClassName("content");
console.log(content);

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
