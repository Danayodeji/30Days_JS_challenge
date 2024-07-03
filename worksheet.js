//                                          ####ARRAY BASIC

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



//                                              ####ARRAY METHODS

//         THE FOLLOWING ARRAY METHODS ARE USED FOR MANIPULATING AN ARRAY

const arr = [34, 55, 95, 20, 15];

//ADD value to the END of an array items
arr.push(100)

// REMOVE value from the END of an array items
arr.pop();

//ADD value to the BEGINNING of an array items
arr.unshift(99);

//REMOVE value from the BEGINNING of an array items
arr.shift();

// reverse the array
arr.reverse();


console.log(arr);


//          THE FOLLOWING ARRAY METHODS ARE USED FOR GETTING VALUES FROM AN ARRAY
let y;
const arr1 = [34, 55, 95, 20, 15];

// check if a values exist within an array
y = arr1.includes(55);

//check the index position of the value within an array
y = arr1.indexOf(34);

// only displays or make a copy of specific value in an array giving a specified starting and ending position without changing values of the array
y =arr1.slice(2,4)

console.log(arr1);
console.log(y, arr1);

// splice can be used to remove a single value from an array e.g (remove 95)
const arr2 = [34, 55, 95, 20, 15];
y = arr2.splice(2, 1); // taking removing only 95 from the array
console.log(y, arr2);

// how to chain methods
const arr3 = [34, 55, 95, 20, 15, 1, 2, 3, 4, 5, 6, 7];
c = arr3.splice(4, arr3.length - 2).reverse().toString().charAt(0).toUpperCase(0); 
console.log(arr3, c);