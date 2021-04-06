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

const result = detectDriverType(27);
console.log(result);
