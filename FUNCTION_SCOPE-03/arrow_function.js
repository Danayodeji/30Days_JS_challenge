// ARROW FUNCTION 

function add(a, b){
    return a + b;               // normal function 
}
 
// Arrow Function example 
const addArrow = (a, b) => {
    return a + b;               // Arrow function = function expression format + removing the function keyword
};  
console.log(add(1, 2));

// shorter arrow function example = removing the return keyword and the curly brackets
    
const subtract = (a, b) => a + b; // implicit or automatically return

console.log(subtract(10, 5));

// example with a single parameter = removing the parentheses on the parameter

const double = a => a * 2; 

console.log(double(10));

// example when returning an object = arrow points to ({})

const createobj = () => ({
    name: 'John',
    age: 25,
    city: 'New York',
    age: 25,
    city: 'New York'
})

console.log(createobj());

// example with a function that returns an array

// local approach

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

numbers.forEach( function (n) { 
    console.log(n);                     // normal array function
});


// modern approach
const number = [1, 2, 3, 4, 5, 6, 7, 8];
number.forEach(i => console.log(i));     // arrow function array





 /*
 Things i have learned from this section are:
 - arrow functions is removing the function keyword and curly brackets in arrow functions
 - shorter arrow function example = removing the return keyword and the curly brackets
- implicit return (one-liner return)
 - removing the function keyword and curly brackets in arrow functions
 - example with a single parameter = removing the parentheses on the parameter
 - example when returning an object = arrow points to ({})
 
 */





