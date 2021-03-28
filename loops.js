/* Working with Loops

1. for loop
2. while loop
3. do while
4. forEach
*/

const friends = ["Derrick", "Bright", "Alex"];

//using map
// friends.map((friend, i) => console.log(friend, i));

// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i]);
// }

// let initialValue = 0;

// while (initialValue < friends.length) {
//   console.log(friends[initialValue]);
//   initialValue++;
// }

let i = 0;

do {
  console.log(friends[i]);
  i++;
} while (i < friends.length);
