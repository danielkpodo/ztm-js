function describeUserDetails(user) {
  if (user.name === "des") {
    return true;
  }
  return false;
}

const user = {
  name: "narh",
};

if (describeUserDetails(user)) {
  console.log("Great is the Lord our God");
} else {
  console.log("I love Queen");
}
