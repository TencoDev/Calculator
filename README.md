# Vintage Calculator

A clean, visually appealing calculator web application with a vintage aesthetic built using vanilla JavaScript, HTML, and CSS. This calculator performs basic arithmetic operations without using the `eval()` function for improved security.

![image](https://github.com/user-attachments/assets/1c27fea8-a4e2-4056-94fe-30ef06a4d527)


## Features

- **Basic Arithmetic Operations**: Addition, subtraction, multiplication, division, and modulo
- **Decimal Support**: Add decimal points to numbers
- **Sign Toggle**: Change positive numbers to negative and vice versa
- **Clear Function**: Reset calculator with one click
- **Chain Calculations**: Continue calculations with the result of previous operations
- **Responsive Design**: Works on desktop and mobile devices
- **Security**: Built without using `eval()` for secure operation
- **Number Formatting**: Handles large numbers and long decimals elegantly

## Live Demo

[View the live calculator here](https://tencodev.github.io/Calculator/)

## Technologies Used

- **HTML5**: Structure
- **CSS3**: Styling with custom properties for theming
- **JavaScript**: Calculator logic and event handling
- **Google Fonts**: Faculty Glyphic font for a vintage look

## Implementation Details

The calculator uses a state-based approach instead of the `eval()` function:

- Each operand and operator is stored separately
- Individual function handlers for different operations
- Results are calculated step-by-step using dedicated math functions
- Display updates are managed with flags to handle different input scenarios

## How It Works

1. **State Management**: The calculator tracks the first operand, operator, and readiness for the second operand
2. **Operation Handling**: Each arithmetic operation has its own dedicated function
3. **Display Management**: Smart display updates for a natural input flow
4. **Result Formatting**: Results are formatted to fit within the display

## Code Structure

- **HTML**: Defines the calculator layout and buttons
- **CSS**: Sets up the visual styling with a vintage color scheme
- **JavaScript**:
  - Event listeners for button interactions
  - Math operation functions
  - Display update logic
  - State management

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/vintage-calculator.git
   ```

2. Open `index.html` in your browser

## Future Enhancements

- Memory functions (M+, M-, MR)
- Keyboard support
- History of calculations
- Additional scientific functions

## License

MIT License - feel free to use and modify for your own projects!

## Acknowledgements

- Design inspired by vintage calculators from the 1970s
- Faculty Glyphic font by Google Fonts
