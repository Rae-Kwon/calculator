const calculator = document.querySelector("#calculator");
const display = document.querySelector("#display");
const keys = document.querySelector("#calculator-keys");


addNums = (first, second) => { return first + second };

subtractNums = (first, second) => { return first - second };

multiplyNums = (first, second) => { return first * second };

divideNums = (first, second) => { return first / second };

evaluateNums = (first, operator, second) => {
    const firstNum = parseFloat(first);
    const secondNum = parseFloat(second);
    if (operator === "add") return addNums(firstNum, secondNum);
    if (operator === "subtract") return subtractNums(firstNum, secondNum);
    if (operator === "multiply") return multiplyNums(firstNum, secondNum);
    if (operator === "divide") return divideNums(firstNum, secondNum);
}


keys.addEventListener("click", e => {
    if (e.target.matches("button")) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;

        Array.from(key.parentNode.children).forEach(k => k.classList.remove("is-pressed"));

        if (!action) {
            if (displayNum === "0" || previousKeyType === "operator" || previousKeyType === "evaluate") {
                display.textContent = keyContent;
            } else {
                display.textContent = displayNum + keyContent;
            }
            calculator.dataset.previousKeyType = "number";
        }
        
        if (
            action === "add" ||
            action === "subtract" ||
            action === "multiply" ||
            action === "divide"
        ) {
            const firstNum = calculator.dataset.firstNum;
            const operator = calculator.dataset.operator;
            const secondNum = displayNum;

            if (firstNum && operator && previousKeyType !== "operator" && previousKeyType !== "evaluate") {
                const calculatedValue = evaluateNums(firstNum, operator, secondNum);
                display.textContent = calculatedValue;

                calculator.dataset.firstNum = calculatedValue;
            } else {
                calculator.dataset.firstNum = displayNum;
            }

            key.classList.add("is-pressed");
            calculator.dataset.previousKeyType = "operator";
            calculator.dataset.operator = action;
        }
        
        if (action === "decimal") {
            if (!displayNum.includes(".")) {
                display.textContent = displayNum + ".";
            } else if (previousKeyType === "operator" || previousKeyType === "evaluate") {
                display.textContent = "0."
            }

            calculator.dataset.previousKeyType = "decimal";
        }
        
        if (action === "all-clear") {
            calculator.dataset.firstNum = "";
            calculator.dataset.operator = "";
            calculator.dataset.modifiedNum = "";
            calculator.dataset.previousKeyType = "";

            display.textContent = 0;
            calculator.dataset.previousKeyType = "all-clear";
        }
        
        if (action === "clear-entry") {
            calculator.dataset.previousKeyType = "";
            display.textContent = 0;
        }
        
        if (action === "evaluate"){
            let firstNum = calculator.dataset.firstNum;
            const operator = calculator.dataset.operator;
            let secondNum = displayNum;

            if (firstNum) {
                if (previousKeyType === "evaluate") {
                    firstNum = displayNum;
                    secondNum = calculator.dataset.modifiedNum;
                }
                display.textContent = evaluateNums(firstNum, operator, secondNum);
            }

            calculator.dataset.modifiedNum = secondNum;
            calculator.dataset.previousKeyType = "evaluate";
        }
    }
});