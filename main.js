let numFirst = 0;
let numNext = 0;
let operator;

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

console.log(operate(multiply, 40, 20));