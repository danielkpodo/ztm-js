function calCulateSum(arr) {
  return arr.reduce((acc, currentValue) => acc + currentValue, 0);
}

const result = calCulateSum([90, 80, 80]);
console.info("Overall sum", result);

let salaries = [100, 900, 800, 120];
