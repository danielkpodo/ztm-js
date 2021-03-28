let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

//const fruitsWithoutBanana = fruits.slice(1, fruits.length);
//fruitsWithoutBanana

fruits.shift();

sortedFruits = fruits.sort();
sortedFruits.push("kiwi");
sortedFruits.shift();

const reversedArr = sortedFruits.reverse();
console.log(reversedArr);

var nestedArr = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(nestedArr[1][1][0]);
