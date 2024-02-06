// Function to perform calculations based on the provided operation
function calculator(operation: string, num1: number, num2: number): number | string {
    if (isNaN(num1) || isNaN(num2)) {
        return "Error: Invalid input. Please provide valid numbers.";
    }

    switch (operation) {
        case "add":
            return num1 + num2;
        case "subtract":
            return num1 - num2;
        case "multiply":
            return num1 * num2;
        case "divide":
            return num2 !== 0 ? num1 / num2 : "Error: Cannot divide by zero";
        default:
            return "Error: Invalid operation";
    }
}

// Main function to parse command line arguments and perform the calculation
function main(): void {
    const [operation, num1, num2] = process.argv.slice(2).map(arg => parseFloat(arg));

    if (isNaN(num1) || isNaN(num2) || !operation) {
        console.error("Error: Incorrect or missing arguments. Please provide an operation and two numbers.");
        return;
    }

    const result: number | string = calculator(operation, num1, num2);
    console.log(result);
}

