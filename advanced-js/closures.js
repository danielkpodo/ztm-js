//A function that returns another function are called closures

const first = () => {
  const greeting = "Hello";
  const second = () => {
    return greeting;
  };
  return second;
};

const output = first();
console.log(output());
