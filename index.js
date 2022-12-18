//KOTEBE UNIVERSITY OF EDUCATION MENELIK(I) SCIENCE SHARED CAMPUS
//Solutions for assignment questions.

//Solutions for question number 1(Finding the next perfect square number).

let input = prompt("Please enter an integer");
let arr = [];
let NegInput = [];
let result = [];
let rootValue = [];
let nextsqr = [];

if (Number.isInteger(+input)) {
  if (+input >= 0) {
    arr.push(+input);
    console.log("You have entered the number", arr + ".");
    rootValue.push(Math.floor(Math.sqrt(+input)));
    result.push(+rootValue + 1);
    nextsqr.push(+result * +result);

    console.log("The next perfect square number is", nextsqr + ".");
  }
} else
  alert(
    "The number you have entered is not an integer. Please refresh the page and enter an integer."
  );

if (Number.isInteger(+input)) {
  if (+input < 0) {
    NegInput.push(+input);
    console.log(
      "You have entered the number",
      NegInput + "." + "The next perfect sqaure number is",
      +"0" + "."
    );
  }
} else
  alert(
    "The number you have entered is not an integer. Please refresh the page and enter an integer."
  );


