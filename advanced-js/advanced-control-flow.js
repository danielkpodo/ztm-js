//Switch statements are really useful when you ave a lot o conditions

function detectDriverType(age) {
  let response;
  switch (age) {
    case 18:
      response = "You are not eligible to drive";
      break;
    case 27:
      response = "Nice you are having a birthday";
      break;
    default:
      response = "Your age is not yet classified";
  }

  return response;
}

const result = detectDriverType(270);
console.log(result);

//How to properly use switch statement with comparison operators
function gradeCalculator(grade) {
  switch (true) {
    case grade >= 90: //This evaluates to a boolean expression that is why true is used in the switch parenthesis
      return "A";
    case grade >= 80:
      return "B";
    case grade >= 70:
      return "C";
    case grade >= 60:
      return "D";
    case grade <= 59:
      return "F";
  }
}
