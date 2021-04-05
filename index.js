function calCulateSum(arr) {
  return arr.reduce((acc, currentValue) => acc + currentValue, 0);
}

const result = calCulateSum([90, 80, 80]);
console.info("Overall sum", result);

let salaries = [100, 900, 800, 120];
let total = 0;
for (salary of salaries) {
  total += salary;
}

const ages = [23, 9, 89, 70, 73];
let final = 0;
for (let i = 0; i < ages.length; i++) {
  final += ages[i];
}

console.log(final);
