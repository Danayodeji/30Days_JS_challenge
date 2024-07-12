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
