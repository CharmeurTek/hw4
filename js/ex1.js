var number1 = prompt("Please enter the first number");
var number2 = prompt("Please enter the second number");
var operator = prompt("Please enter the mathematical operation (+, -, *, /)");

number1 = parseInt(number1);
number2 = parseInt(number2);

function operation(operator, number1, number2) {
    switch (operator) {
        case '+':
            console.log(`${number1} ${operator} ${number2} = ${number1 + number2}`);
            break;
        case '-':
            console.log(`${number1} ${operator} ${number2} = ${number1 - number2}`);
            break;
        case '*':
            console.log(`${number1} ${operator} ${number2} = ${number1 * number2}`);
            break;
        case '/':
            console.log(`${number1} ${operator} ${number2} = ${number1 / number2}`);
            break;
    }
}

operation(operator, number1, number2);