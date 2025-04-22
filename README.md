# Calculator
🧮 JavaScript Calculator
This is a basic calculator built using HTML, CSS, and JavaScript. It supports standard arithmetic operations such as addition, subtraction, multiplication, and division. The project is designed to demonstrate fundamental DOM manipulation, event handling, and logic implementation in vanilla JavaScript.

✨ Features
* Basic operations: +, -, *, /

* Decimal number input (e.g., 0.5)

* Backspace functionality to delete the last digit

* Reset (C) to clear the current calculation

* Keyboard support for all numeric and operator keys

* Operates in left-to-right (sequential) logic

🚀 How It Works
*   Operation Execution
    When pressing the = or Enter key, the calculator evaluates the current expression and displays the result. All internal variables are reset after the operation, meaning you must start fresh to perform a new calculation.

*   Chained Operations
    You can input operations in a continuous sequence (e.g., 5 + 3 - 2). The calculator computes the current expression when a new operator is entered, shows the intermediate result, and continues with the next step.

*   No Operator Precedence
    Operations are executed in the order they are entered (left to right), without considering mathematical precedence. For example:

    Input: 5 + 3 * 4
    Evaluated as: (5 + 3) * 4 = 32
    Not: 5 + (3 * 4) = 17

*   Decimal Input
    Decimals must be entered starting with 0, such as 0.4. Trying to input a decimal starting with . may not work reliably depending on the current state of the calculator.

*   Keyboard Support
    You can use your keyboard to enter numbers and operators directly. Supported keys include:

-   Numbers: 0 to 9

-   Operators: +, -, *, /

-   Decimal point: .

-   Enter key (Enter or =)

-   Clear: C

-   Backspace: removes the last digit


🛠 Technical Details
*   The calculator uses a global state to keep track of the operands and operator.

*   All input is handled through the populate() function, which updates the display and logic accordingly.

*   The UI is dynamically generated with JavaScript by creating and appending buttons to the DOM.

*   A keydown event listener allows full keyboard interaction.

📦 Technologies Used
*   HTML5

*   CSS3

*   JavaScript

⚠️ Limitations
*   Operator precedence is not implemented.

*   Does not support negative number input as the first character.

*   Division by zero returns Infinity (not handled with a custom error).

*   No parentheses or advanced math operations.