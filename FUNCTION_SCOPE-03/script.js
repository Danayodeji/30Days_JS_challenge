// function is a way to group codes together that can be used anytime in a code 

function sayHello() {
    console.log("Hello world!");
}

sayHello();

// declaring parameter in a function
function add(num1, num2) {
    console.log(num1  + num2);
}
add(5,10); //this code invoke a function and arguments can be passed in

// example of a function that returns something bellow👇
function subtract(num1, num2) {
    return num1 - num2;
}
const result = subtract(10, 5);
console.log(result);

function registerUser(user = 'Bot') { // default parameter could add to use incase not value is added 
    return `${user} is registered`; //the variable user does not exist outside the scope of the function but only within the function
}
console.log(registerUser());

// Rest operator as parameter

function sum(...numbers){ // the rest operation store the value inputed in one array
    let total = 0;

    for (const num of numbers) {
        total += num;
    }

    return total;
}
console.log(sum(1, 2, 3, 4, 5, 6, 100));

// object as parameter
function loginUser(user = 'No user'){
    return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const data = {
    id: 1,
    name: 'Daniel Ayodeji'
};
console.log(loginUser(data));

// Array as parameter    # a function that generates random number from the numbers passed in the array
function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    console.log(item);
}

getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // There will be no need to pass the number in an array if the rest operator is used. it does it automatically


/* SCOPE: GLOBAL & FUNCTION SCOPE 
    
    - SCOPE NOTE: Scope simply means the current area or the context of a specific set of code and a certain rules for what we can access in a specific scope

    - GLOBAL SCOPE: Any variable declared outside of any function is considered global. They are accessible from anywhere in your code.
*/ 

// alert("hello Ayo");
// console.log(innerWidth);

//  example of global scope variable👌
const x = 100;

console.log(x, 'in global');
// global variable used in function
function run(){
    console.log(innerHeight);
    console.log(x, 'in function');
}
run();

// global variable used in block

if (true) {
    console.log(x, 'in block');
}

// example of function scope variable 👌
function add() {
    const x = 1; // this is called variable shadowing: where the function overwrites the global variable
    const y =50; // any variable declared inside of function will not work outside that function
    console.log(x + y, 'in function scope');
}
add();

// example of block scope variable ��

if(true) {
    const y = 200;
    console.log(x + y, 'in block');
}
//console.log(x + y); //❌❌ this will not work because y is only declared inside of function scope and cannot be used outside that function 

// example with simple for-loop

for (let i = 0; i <= 10; i++) {
    console.log(i); // 'i' is a block scope variable and cannot be used outside that for-loop block
}


