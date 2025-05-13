console.log("Hello, World!");

let number1 = 5;
let number2 = 10;
let operand = "/"

add = (x,y) => x+y;
subtract = (x,y) => x-y;
multiply = (x,y) => x*y;
divide = (x,y) => x/y;

function operator(x,y,operand){
    if (operand == "+"){
        return add(x, y)
    } else if (operand == "-"){
        return subtract(x, y)
    } else if (operand == "*"){
        return multiply(x,y)
    } else if (operand == "/"){
        return divide(x,y)
    } else {
        throw new console.error("Invalid arguements");
    }
}

console.log(operator(number1, number2, operand))