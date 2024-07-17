/*
1. ||=  👉 assigns the right side value only if the left is a falsy value.

2. &&=  👉 assigns the right side value only if the left is a truthy value

3. ??=  👉 assigns the right side value only if the left is null or undefined   

 */


// 1. ||=  👉 assigns the right side value only if the left is a falsy value.

let a = false;

if (!a) { // meaning if 'a' is a falsy value then set a to 10
    a = 10;   
}// longer way

// using Assignment operator
a = a || 10; // Shorter 

a ||= 10;      // shortest 

console.log(a);


//  2. &&=  👉 assigns the right side value only if the left is a truthy value

let b = 20;

if (b) { // meaning if 'a' is a falsy value then set a to 10
    b = 30;   
}// longer way

// Using the Logical operator

b = b && 30; // Shorter
b &&= 30;   // shortest

console.log(b);


// 3. ??=  👉 assigns the right side value only if the left is null or undefined 

let c = null;

if (c === null || c === undefined) {
    c = 20;
}

// Using the Nullish coalescing operator

c = c ?? 20;
c ??= 20;

console.log(c);