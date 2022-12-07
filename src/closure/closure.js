function greeting() {
  let userName = "Oscar";
  function displayUserName() {
    console.log(`Hello ${userName}`);
  }
  return displayUserName;
}
const g = greeting();
console.log(g);
console.log(g());
