"use strict";
const inputElm = document.querySelector(".calc__input");
const resultElm = document.querySelector(".calc__result");
let result = 0;
let input = 0;
let op = "none";
let additionalInput = 0;
let equalsClicked = false;

// general clearing function, which I can reuse again and agaaaaain
const clear = () => {
  result = 0;
  input = 0;
  resultElm.textContent = result;
  inputElm.value = 0;
  op = "none";
};

// clearing calc when page loads
clear();

// SAVENUMBER: saves input number and prints it to inputElm
const saveNumber = (event) => {
  if (equalsClicked) {
    clear();
    equalsClicked = false;
  }
  if (input === 0) {
    input = event.target.textContent;
  } else {
    additionalInput = event.target.textContent;
    input += additionalInput;
  }
  saveDot(input);
  inputElm.value = input;
};

// SAVEDOT: replaces comma with a dot
const saveDot = (arg) => {
  if (arg.includes(",")) {
    let str = "";
    str = arg.replace(",", ".");
    input = str;
  }
};

// NUMBERS: saves what number was clicked
const btn0 = document.getElementById("btn-zero");
const btn1 = document.getElementById("btn-one");
const btn2 = document.getElementById("btn-two");
const btn3 = document.getElementById("btn-three");
const btn4 = document.getElementById("btn-four");
const btn5 = document.getElementById("btn-five");
const btn6 = document.getElementById("btn-six");
const btn7 = document.getElementById("btn-seven");
const btn8 = document.getElementById("btn-eight");
const btn9 = document.getElementById("btn-nine");
const btnFloat = document.getElementById("btn-floating-point");
btn0.addEventListener("click", saveNumber);
btn1.addEventListener("click", saveNumber);
btn2.addEventListener("click", saveNumber);
btn3.addEventListener("click", saveNumber);
btn4.addEventListener("click", saveNumber);
btn5.addEventListener("click", saveNumber);
btn6.addEventListener("click", saveNumber);
btn7.addEventListener("click", saveNumber);
btn8.addEventListener("click", saveNumber);
btn9.addEventListener("click", saveNumber);
btnFloat.addEventListener("click", saveNumber);

// SAVEOPERATION: saves clicked operation into later used var
const saveOperation = (event) => {
  op = event.target.textContent;
  result = input;
  input = 0;
};

// OPERATORS: saves operation when clicked
const btnPlus = document.querySelector("#btn-plus");
const btnMinus = document.querySelector("#btn-minus");
const btnMultiply = document.querySelector("#btn-multiply");
const btnDivide = document.querySelector("#btn-divide");
btnPlus.addEventListener("click", saveOperation);
btnMinus.addEventListener("click", saveOperation);
btnMultiply.addEventListener("click", saveOperation);
btnDivide.addEventListener("click", saveOperation);

// C: clears input and result
const btnClear = document.querySelector("#btn-clear");
btnClear.addEventListener("click", clear);

const equals = () => {
  let input = Number(inputElm.value);
  result = Number(result);
  if (input != 0) {
    if (op === "+") {
      result += input;
    } else if (op === "−") {
      result -= input;
    } else if (op === "×") {
      result *= input;
    } else if (op === "÷") {
      result /= input;
    } else {
      result = input;
    }
    //when input is zero and operation is selected, result is not NaN
  } else {
    result = input;
  }
  //round if has more than two decimal places
  result = Math.round(result * 100) / 100;
  resultElm.textContent = result;
  equalsClicked = true;
  op = "none";
};

// clicking equals btn initiates equals function
const btnEqual = document.querySelector("#btn-equal");
btnEqual.addEventListener("click", equals);
