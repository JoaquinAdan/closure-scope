const myGlobal = 0;

function myFunction() {
  const myNumber = 1;
  console.log(myGlobal);

  function parent() {
    const inner = 2;
    console.log(myNumber, myGlobal);
    function child() {
      console.log(inner, myNumber, myGlobal);
    }
    child();
  }
  parent();
}
myFunction();

const firstNum = 1;
const secondNum = 2;
function sumWithClosure() {
  function anidado() {
    if (secondNum == 2) {
      console.log(secondNum + firstNum);
    }
    console.log(firstNum);
  }
  return anidado;
}
sumWithClosure()