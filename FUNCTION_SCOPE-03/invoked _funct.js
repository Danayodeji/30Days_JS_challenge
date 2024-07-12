/*
IMIDIATELY INVOKED FUNCTION EXPRESSIONS IIFE = a process of defining or declaring a function and invoking it at the same time
- it help avoid global scope collisions  of variables between different files and functions
*/


// syntax highlighting
(function greetUser() {
    const user = 'John Smith';
    const hello = () => console.log('Hello from the IIFE');
    hello();
})();


// ADDING PARAMETER TO IIFE 

(function greetUser(name) {
    console.log(`Hello from ${name}`);
})('John Doe');

// NAMING IIFE FUNCTION



const greetJohn = (function () {
    console.log('Hello from John');
})();

greetJohn(); // will output "Hello from John"


/*
1. IIFE: Imediately Invoked Function Expressions (IIFE)
2. Function Definition: Defined within parentheses, followed by curly braces {}
3. Function Invocation: Called immediately after the function definition with parentheses ()
4. Global Scope: Variables defined within an IIFE function are not accessible outside of it
*/
