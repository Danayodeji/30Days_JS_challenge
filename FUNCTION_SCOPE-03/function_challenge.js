/*
                                        FUNCTION CHALLENGE

1. Create a function called getCelsius () that takes a temperature in Fahrenheit as an argument and returns the temperature in celsius. For bonus points, write it as a one line arrow function

Expected Result: console. log (getCelsius (32)); // 0

You can make the output look prettier by putting it into a string.
You can even add \xBO (degrees) and a C in front of the celsius temperature.

Example: console.log ('The temperature is'+ getCelsius (32) + '\xBOC') // The temperature is 0 ��C
 
Hints:
The formula for Fahrenheit to Celsius is (F - 32) * 5 / 9 . 

*/

// SOLUTION IN REGULAR FUNCTIONS

function getCelsius(F) {
    const celsius = ((F - 32) * 5) / 9;
 console.log(celsius);
}
getCelsius(100);

// SOLUTION IN ARROW FUNCTION

const getCelsius2 = F => ((F - 32) * 5) / 9;

console.log(getCelsius2(32));

// SOLUTION IN ONE LINE ARROW FUNCTION

const getCelsius3 = F => console.log((F - 32) * 5 / 9);

getCelsius3(100);

// SOLUTION IN TEMPLATE LITERAL

const getCelsius4 = F => console.log(`The temperature is ${((F - 32) * 5) / 9} \xB0C`);

getCelsius4(32);

// SOLUTION IN STRING CONCATENATION

const getCelsius5 = F => console.log('The temperature is ' + ((F - 32) * 5 / 9) + ' \xB0C');

getCelsius5(32);




/*
2. Create an arrow function called minMax () that takes in an array of numbers and returns an object with the minimum and maximum numbers in the array.

Expected Result:
console. log (minMak( [1, 2, 3, 4, 51));

// { min: 1, max: 5 }
Hints:
1. You can use Math.min() and Math.max() to get the min and max of a list of numbers.
2. You can use the Spread ...operator to spread the values of an array into separate arguments.
*/

// SOLUTION IN REGULAR FUNCTION

function minMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return { min, max };
}
 console.log(minMax([1, 2, 3, 4, 51]));

  

/*
3. Create an IIFE (Immediately Invoked Function Expression) that takes in the length and width of a rectangle outputs it to the console in a message as soon as the page loads.

Expected Result:
// On page load the area of a rectangle with a length of 10 and a width c

Hints:

1. The area of a rectangle is length * width. These should get passed into the IIFE as arguments.
2. You do not have to return anything from this function, just log to the console.
*/
// solution with arrow function

const lengthWidth = (length, width) => {
    const area = length * width;
    console.log(area);
};
lengthWidth(4, 5); 

// IIFE with arrow function

((length, width) => {
    const area = length * width;     
    
    const output = `The area of a rectangle with a length ${length} and a width of ${width} is ${area} `;     // IIFE 
    
    console.log(output);

 })(4, 5);