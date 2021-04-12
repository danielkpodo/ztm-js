// A deterministic function meabns if a function receives an input it will always spill out the same value

//Compose -> is the act of putting two functions together to form a third function where the output of one function is the input of the other

//Note f, g are functions and are the same
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

const result = compose(sum, sum)(20);
console.log(result);
