//Babel allows us to convert new js features to forms that are compatible with all browsers
//1. let & const
/* 
let can be used for reassigning variables
*Let is also a block scope variable -> We say it is block scope
const is used for constant variables
NB:// With objects that are decaled using constants you can change the properties
*/

//2. Destructuring
const user = {
  name: "narh",
  age: 30,
  favouriteProgramLang: "Python",
};

//Destruction example
const { name, age, favouriteProgramLang } = user;
console.log("Daniel " + name + " is a good man");

// Using variables to create obj properties
const amount = 190;

const claim = {
  [amount]: 890, //new way of declaring variables as keys
  age: 90,
};

console.log(claim[190]);

//When name and property are the same we use only the key

//3. Template Strings ``

//4 Default arguments: It is good to have default arguments
function greeting(name, age = 90) {
  message = `Hello ${name} your age is ${age}`;
  return message;
}

console.log(greeting("Daniel"));

//Datatype => Symbol, They create completey unique type, Use mostly as object properties

const skill = {
  name: Symbol("Daniel"),
};

console.log(skill.name);

// 5. Arrow functions
