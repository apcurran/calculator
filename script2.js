"use strict";

const calculator = (() => {
    const numButtons = document.querySelectorAll("[data-digit]");
    const operators = document.querySelectorAll("[data-operation]");
    const output = document.querySelector("[data-output]");
    const equalsBtn = document.querySelector(".equals");
    const clearBtn = document.querySelector(".clear");
    const deleteBtn = document.querySelector("[data-delete]");

    const calcModule = (() => {
        let firstValue = "";
        let secondValue = "";
        let operation = "";

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

        function appendNumber(currentButtonTextContent) {
            if (currentButtonTextContent === "." && output.textContent.includes(".")) return;
            output.textContent += currentButtonTextContent;
        }

        function setFirstValue(newValue) {
            firstValue = Number(newValue);
        }

        function setSecondValue(newValue) {
            secondValue = Number(newValue);
        }

        function setOperation(newOperation) {
            operation = newOperation;
        }

        function updateSolution () {
            return operate(operation, firstValue, secondValue);
        }

        function clear() {
            firstValue = "";
            secondValue = "";
            output.textContent = "";
        }

        function deleteLast() {
            output.textContent = output.textContent.slice(0, -1);
        }

        // Publicly available
        return {
            appendNumber,
            setFirstValue,
            setSecondValue,
            setOperation,
            updateSolution,
            clear,
            deleteLast
        }
    })();

    numButtons.forEach(button => {
        button.addEventListener("click", () => {
            calcModule.appendNumber(button.textContent);
        });
    });
    
    operators.forEach(operator => {
        operator.addEventListener("click", (event) => {
            calcModule.setFirstValue(output.textContent);
            calcModule.setOperation(event.target.textContent);
            output.textContent = "";
        });
    });

    equalsBtn.addEventListener("click", (event) => {
        calcModule.setSecondValue(output.textContent);
        const solution = calcModule.updateSolution();
        output.textContent = solution;
    })
    
    clearBtn.addEventListener("click", calcModule.clear);
    deleteBtn.addEventListener("click", calcModule.deleteLast);

})();