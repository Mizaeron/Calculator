const display = document.getElementById("display");
const numbers = document.querySelectorAll(".number");
const btnOperator = document.querySelectorAll(".operator");

let numFirst = 0;
let numNext = 0;
let operator;
let displayValue = 0;
let count = 0;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, numFirst, numNext) {
    if (operator == divide) return divide(numFirst, numNext);
    if (operator == multiply) return multiply(numFirst, numNext);
    if (operator == subtract) return subtract(numFirst, numNext);
    if (operator == add) return add(numFirst, numNext);
}

function numDisplay(input) {
   let displayInput = display.value += input;
   console.log(displayInput);
   displayValue = displayInput;
}

function clearDisplay() {
    display.value = "";
}

numbers.forEach(number => {
    number.addEventListener("click", () => console.log(displayValue));
});


btnOperator.forEach(operator => {
    operator.addEventListener("click", () => {
        count++;
        firstNum = displayValue;
        console.log(firstNum);

        if (count > 1) console.log(numNext);
    });
});