//Currying is a process of converting a function that accepts multiple arguments into a function that accepts them one at a time

//Original funct

const multiply = (a, b) => a * b;

const curriedMultiply = (a) => (b) => a * b;

//invoking the curreid func
const result = curriedMultiply(10)(12);

console.log(result);
