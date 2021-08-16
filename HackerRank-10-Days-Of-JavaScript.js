/* ===================
    Day 0: Hello, World!
   =================== */

function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');
    
    // Write a line of code that prints parameterVariable to stdout using console.log: 
    console.log(parameterVariable);
    
}

/* ===================
    Day 0: Data Types
   =================== */

function performOperation(secondInteger, secondDecimal,
    secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;
    
    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;
    
    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';
    
    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
    
    
    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
    console.log(firstInteger + parseInt(secondInteger));
    console.log(firstDecimal + parseFloat(secondDecimal));
    console.log(firstString + secondString);
    
    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
}

/* ============================
    Day 1: Arithmetic Operators
   ============================ */

   function getArea(length, width) {
    let area;
    // Write your code here
    area = length * width;
    return area;
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter = 2 * (length + width);
    return perimeter;
}

/* ==================
    Day 1: Functions
   ================== */


/*
 * Create the function factorial here
 */
function factorial(n){
    let fact = 1;
    for(let i = 1; i <= n; i++){
        fact *= i;
    }
    return fact;
}

/* =====================
    Day 1: Let and Const
   ===================== */

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    
    let r = readLine()
    const PI = Math.PI;
    // Print the area of the circle:
    let area = PI * (r * r);
    console.log(area);
    // Print the perimeter of the circle:
    let perimeter = 2 * PI * r;
    console.log(perimeter);
}


