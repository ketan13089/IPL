// Arrow function to calculate factorial
const factorial = (n) => {
    if (n < 0) return 'Invalid input'; // Factorial is not defined for negative numbers
    return n === 0 ? 1 : n * factorial(n - 1);
};

// Arrow function to calculate Fibonacci
const fibonacci = (n) => {
    if (n < 0) return 'Invalid input'; // Fibonacci is not defined for negative numbers
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};

// Arrow function to perform basic calculations
const calculate = (a, b, operator) => {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : 'Cannot divide by zero';
        default:
            return 'Invalid operator';
    }
};

// Function to take user input and perform calculations
const performCalculations = () => {
    const n = parseInt(prompt('Enter a non-negative integer for factorial and Fibonacci:'));
    const a = parseFloat(prompt('Enter the first number for calculations:'));
    const b = parseFloat(prompt('Enter the second number for calculations:'));
    const operator = prompt('Enter an operator (+, -, *, /):');

    console.log(`Factorial of ${n}: ${factorial(n)}`);
    console.log(`Fibonacci of ${n}: ${fibonacci(n)}`);
    console.log(`Result of ${a} ${operator} ${b}: ${calculate(a, b, operator)}`);
};

// Call the function to perform calculations
performCalculations();
