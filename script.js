function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multuply(a, b){
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
        case 'x':
            return multuply(num1, num2);
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
            return "x";
        case 12:
            return 7;
        case 13:
            return 8;
        case 14:
            return 9;
        case 15:
            return "/";
        case 16:
            return "C";

    }
}

function populate(digit){
    switch (digit){
        case "+":
            if (!numOne){
                result = numOne = numActual;
                numActual = "";
                operator = digit;
            } else{
                numTwo = numActual;
                numActual = "";
                result = operate(Number(numOne), Number(numTwo), operator);
                operator = digit;
                numOne = result;
            }
            lastDigit = digit;
            return result;
        case "-":
            if (!numOne){
                result = numOne = numActual;
                numActual = ""
                operator = digit;
            } else{
                numTwo = numActual
                numActual = ""
                result = operate(Number(numOne), Number(numTwo), operator);
                operator = digit;
                numOne = result;
            }
            lastDigit = digit;
            return result;
        case "x":
            if (!numOne){
                result = numOne = numActual;
                numActual = ""
                operator = digit;
            } else {
                numTwo = numActual
                numActual = ""
                result = operate(Number(numOne), Number(numTwo), operator);
                operator = digit;
                numOne = result;
            }
            lastDigit = digit;
            return result;
        case "/":
            if (!numOne){
                result = numOne = numActual;
                numActual = ""
                operator = digit;
            } else{
                numTwo = numActual
                numActual = ""
                result = operate(Number(numOne), Number(numTwo), operator);
                operator = digit;
                numOne = result;
            }
            lastDigit = digit;
            return result;
        case "=":
            if (numOne){
                numTwo = numActual
                numActual = "";
                result = operate(Number(numOne), Number(numTwo), operator);
                numOne = null;
                numTwo = null;
                operator = "";
            }
            lastDigit = digit;
            return result;
        case "C":
            return "";
        case ".":
            break;
        default:
            numActual += digit
            lastDigit = digit;
            return numActual;
    }
}
let lastDigit;
let result;
let numOne = null;
let numTwo = null;
let operator = "";
let numActual = "";

const display = document.querySelector("#display");
const buttonsSection = document.querySelector("#buttons");
const button = [];

for (i=0; i<17; i++){
    button[i] = document.createElement("button");
    button[i].setAttribute("id", "button");
    button[i].textContent = getTextContent(i);
    button[i].setAttribute("value", `${button[i].textContent}`);
    buttonsSection.appendChild(button[i]);

    button[i].addEventListener("click", (e) => {
            display.textContent = populate(e.target.value);
        })
}