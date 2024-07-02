let x;

//ARRAY LITERAL
const numbers = [12, 45, 33, 29,39];
const mixed = [12, 'Hello', true, null];

//ARRAY CONSTRUCTOR
const fruits = new Array('apple','grape', 'orange' );

console.log(numbers);
console.log(fruits);

// HOW TO ACCESS SPECIFIC ITEMIN AN ARRAY

x = numbers[0];
x = numbers[0] + numbers[1];

//using template literal 
x = `my favorite fruit is an ${fruits[2]}`;

//know how many items are in array
x = numbers.length;

//change a value in an array
fruits[2] = 'pear';
x = fruits;

//determine the lenght of items of an array to display
fruits.length = 2;
x = fruits;

// add a value to the end of an array items 
fruits[fruits.length] = 'banana';

// replace the last value of an array items with a new value (no method approach)
fruits[fruits.length -1] = 'mango'




console.log(x);