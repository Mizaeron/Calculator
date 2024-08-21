const display = document.getElementById("display");
const numbers = document.querySelectorAll(".number");
const btnOperator = document.querySelectorAll(".operator");

let numFirst = "";
let numNext = "";
let result = 0;
let operator;
let displayValue;

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
    if (operator == "/") return divide(numFirst, numNext);
    if (operator == "*") return multiply(numFirst, numNext);
    if (operator == "-") return subtract(numFirst, numNext);
    if (operator == "+") return add(parseFloat(numFirst), parseFloat(numNext));
}

function clearDisplay() {
    display.value = "";
}

function resetVar() {
    numFirst = "";
    numNext = "";
    operator = undefined;
}

numbers.forEach(button => {
    button.addEventListener("click", (e) => {
       
        switch(operator){
            case undefined:
                display.value += e.target.innerText;
                displayValue = display.value;
                numFirst = displayValue;
                break;
            case "+":
                numNext += e.target.innerText;
                display.value = numNext;
                displayValue = numNext;
                break;
            case "-":
                numNext += e.target.innerText;
                display.value = numNext;
                displayValue = numNext;
                break;
            case "/":
                numNext += e.target.innerText;
                display.value = numNext;
                displayValue = numNext;
                break;
            case "*":
                numNext += e.target.innerText;
                display.value = numNext;
                displayValue = numNext;
                break;
        }


        

        console.log(`display value: ${displayValue}`);
        console.log(`first number: ${numFirst}`);
        console.log(`next number: ${numNext}`);
        console.log(`${operator}`);
    })
})

btnOperator.forEach(button => {
    button.addEventListener("click", (e) => {
        if (operator != undefined && e.target.innerText == "+") {
            result = operate(operator, numFirst, numNext);
            numFirst = result;
            numNext = "";
            display.value = result;  
        }
        if (operator != undefined && e.target.innerText == "-") {
            result = operate(operator, numFirst, numNext);
            numFirst = result;
            numNext = "";
            display.value = result;  
        }
        if (operator != undefined && e.target.innerText == "*") {
            result = operate(operator, numFirst, numNext);
            numFirst = result;
            numNext = "";
            display.value = result;  
        }
        if (operator != undefined && e.target.innerText == "/") {
            result = operate(operator, numFirst, numNext);
            numFirst = result;
            numNext = "";
            display.value = result;  
        }
        if (e.target.innerText == "+") operator = "+";
        if (e.target.innerText == "-") operator = "-";
        if (e.target.innerText == "/") operator = "/";
        if (e.target.innerText == "*") operator = "+";
    
        if (e.target.innerText == "=") {
            result = operate(operator, numFirst, numNext);
            display.value = result;
            resetVar();
        };
        console.log(result);
    })
})

