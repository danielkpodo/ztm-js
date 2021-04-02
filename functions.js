/* Functions allows us to make our code re-usable
It allows us to avoid duplication in our code
A function that does not return a value spits out undefined

For abstraction purposes make sure your func returns true
*/

function checkDriverAge(age) {
  if (!validInput(age)) {
    return console.log("Age must be an integer");
  }
  if (age < 18) return console.log("Too young to drive");
  if (age > 18) return console.log("Powering on, drive fast");
  if (age === 18) return console.log("Congratulations on your first drive");
}

function validInput(value) {
  if (typeof value === "number") return true;

  return false;
}

checkDriverAge(27);
