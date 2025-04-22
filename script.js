function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(num1, num2, operator){
    switch(operator){
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
    }
}

function getTextContent(i){
    switch (i){
        case 0:
            return 0;
        case 1:
            return ".";
        case 2:
            return "=";
        case 3:
            return "+";
        case 4:
            return 1;
        case 5:
            return 2;
        case 6:
            return 3;
        case 7:
            return "-";
        case 8:
            return 4;
        case 9:
            return 5;
        case 10:
            return 6;
        case 11:
            return "*";
        case 12:
            return 7;
        case 13:
            return 8;
        case 14:
            return 9;
        case 15:
            return "/";
        case 16:
            return "Backspace";
        case 17:
            return "C";

    }
}

function cleanGlobalVariables (){
    numOne = null;
    numTwo = null;
    operator = "";
    numActual = "";
    lastDigit = true;
}

function populate(digit){
    let isOperator = digit == "+" || digit == "-" || digit == "*" || digit == "/";
    let isNumber = digit >= "0" && digit <= "9";
    let isClear = digit == "C";
    let isBackspace = digit == "Backspace";
    let isDot = digit == ".";
    let isEnter = digit == "Enter" || digit == "=";

    if (isClear){
        cleanGlobalVariables();
        displayContent = "";
    }else if (isBackspace){
        numActual = numActual.slice(0, -1); 
        displayContent = numActual;
    }else if (isNumber && numActual.length < 13) {
        numActual += digit;
        displayContent = numActual;
    } else if (isOperator && !numOne){
            numOne = Number(numActual);
            operator = digit;
            numActual = "";
            displayContent = numOne;
    } else if (isOperator && numOne){
            numTwo = Number(numActual);
            numOne = operate(numOne, numTwo, operator);
            if (numOne.toString().length > 12) {
                numOne = Number(numOne).toFixed(11); 
            }
            displayContent = numOne;
            numActual = ""
            operator = digit;
    } else if(isEnter && numOne){
        numActual = operate(Number(numOne), Number(numActual), operator);
        if (numActual.toString().length > 12) {
            numActual = Number(numActual).toFixed(11); 
        }
        displayContent = numActual;
        cleanGlobalVariables();
    } else if(isDot && numActual % 1 == 0){
        numActual += digit
        displayContent = numActual;
    }
    return displayContent;
}

let result = 0;
let numOne = null;
let numTwo = null;
let operator = "";
let numActual = "";
let displayContent = "";

const display = document.querySelector("#display");
const buttonsSection = document.querySelector("#buttons");
const button = [];

for (i=0; i<18; i++){
    button[i] = document.createElement("button");
    button[i].setAttribute("id", "button");
    button[i].textContent = getTextContent(i);
    button[i].setAttribute("value", `${button[i].textContent}`);
    buttonsSection.appendChild(button[i]);

    button[i].addEventListener("click", (e) => {
            display.textContent = populate(e.target.value);
        })
}

const calculator = document.querySelector("html");
calculator.addEventListener("keydown", (e) => {
    display.textContent = populate(e.key);
})