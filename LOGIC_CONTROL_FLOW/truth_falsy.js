/*
The 6 FALSY VALUES

- false
- 0
- "" or '' (empty string)
- null
- undefined
- NaN

*/

const x = 0;

if (x) {
    console.log('This is Truthy');
} else{
    console.log('This is Falsy');
};


/*
    TRUTHY VALUES

- Everything else that not false
- true 
- '0' (0 in a string)
- ' ' (space in a string)
- 'false' (false in a string)
- [] (empty array)
- {} (empty object)
- function () {} (empty function)

*/

// TRUTHY AND FALSY CAVEATS

//CAVEAT 1:

const children = 0;

if (children) {// This will return false as a value which is wrong for an an input with 0 value
    console.log(`You have ${children} children`);
} else {
    console.log('Please enter number of children');
}
// The code above would not take 0 from an input of someone with 0 children because 0 is a falsy value. 

//SOLUTION APPROACH 

const children1 = 0;

if (!isNaN(children1)) { // children1 !== undefined or !isNaN(children1)
    console.log(`You have ${children1} children`);
} else {
    console.log('Please enter number of children');
}

// CAVEAT 2: CHECK FOR EMPTY ARRAY

const post = []; // length of empty array = 0 (index)

if (post) { //this wil the post cuz an empty array is truthy
    console.log('list post');
} else {
    console.log('No posts to list');
} // The code above is supposed to output 'no posts to list'

 // Solution approach

 const posts = []; 

 if (posts.length > 0) {  
    console.log('list post');
 } else {
    console.log('No posts to list');
 }


// CAVEAT 3: CHECKING FOR EMPTY OBJECT

const user = {};

if (user) {
    console.log('List User');
}else {
    console.log('No user');
} // The code above is supposed to output 'no user' since the object is empty

// Solution approach

const users = {};
//to check the length of an object = object.keys() returns an array of the keys and length can then be checked
if (Object.keys(user).length > 0) {
    console.log('List User');
}else {
    console.log('No user');
}

// CAVEAT 4: LOOSE EQUALITY (==)
/*
example 

console.log(false == 0); // return true
console.log('' == 0); // return true
console.log(null == undefined); // return true

(===)  will not just the values but also the types, and in this case return false to all = best practice

console.log(false === 0); // return false
console.log('' === 0); // return false
console.log(null === undefined); // return false
*/
