const numButtons = document.querySelectorAll("[data-digit]");
const operators = document.querySelectorAll("[data-operation]");
const output = document.querySelector("[data-output]");
const equalsBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector("[data-delete]");

let firstOperand;
let secondOperand;
let operation;

// Math Operators

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

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "x":
            return multiply(a, b);
            break;
        case "/":
            if(b == 0) {
                return output.textContent = "Skynet: You can't divide by 0.";
            } else {
                return divide(a, b);
            }
            break;
    }
}

function checkForExistingDecimal() {
    if(output.textContent.indexOf(".") < 1) {
        output.textContent += ".";
    }
}

function clear() {
    // I need to clear the stored previous operand & current operand here.
    firstOperand = "";
    secondOperand = '';
    output.textContent = "";
}

function deleteLast() {
    output.textContent = output.textContent.slice(0, -1);
}

clearBtn.addEventListener("click", () => {
    clear();
});

deleteBtn.addEventListener("click", () => {
    deleteLast();
});

// Loop through all operators and attach a click event to store the first operand and current operator.
operators.forEach((op) => {
    op.addEventListener("click", (event) => {
        firstOperand = parseFloat(output.textContent);
        operation = event.target.textContent;
        output.textContent = "";
    });
});

equalsBtn.addEventListener("click", (event) => {
    secondOperand = parseFloat(output.textContent);
    const solution = operate(operation, firstOperand, secondOperand);
    output.textContent = solution;
});

numButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const currentBtn = event.target;
        if(currentBtn.textContent === ".") {
            checkForExistingDecimal();
        } else {
            output.textContent += currentBtn.textContent;
        }
    });
})