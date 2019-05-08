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

// operate function

function operate(operator, a, b) {
    switch (operator) {
        case "add":
            return add(a, b);
            break;
        case "subtract":
            return subtract(a, b);
            break;
        case "multiply":
            return multiply(a, b);
            break;
        case "divide":
            if(a == 0 || b == 0) {
                return alert("Skynet says you can't divide by 0.");
            } else {
                return divide(a, b);
            }
            break;
    }
}
