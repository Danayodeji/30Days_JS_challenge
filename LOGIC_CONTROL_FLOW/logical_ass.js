
// 1. The Logical AND operator (&&) : will return the first falsy value or the last value

let a;

a = 10 && 20; // returns 20
a = 10 && 20 && 30; // returns 30 
a = 10 && 0 && 30; // returns 0 (falsy)
a = 10 && '' && 0 && 30; // returns nothing (falsy)

console.log(a);

// A practical application of &&

const posts = ['post one', 'post two', 'post three']; 
// let say we are getting the posts from a database or some api and we want to show them on a page

// 1: showing the fist post 

console.log(posts[0]);


// 2: what to show if the array is empty 

const post = []; // return undefined when empty

post.length > 0 && console.log(post[0]); // returns nothing indicating the array is empty
// this help when collecting data from an api or database to check and only display an existing data, but displays nothing when there is no data available


// 2. The logical OR operator (||) :  Will return the first truthy value or the last value

let b;

b = 10 || 20;
b = 0 || 20;
b = 0 || null || '' || undefined; // retuns the last

console.log(b);

// 3. THE NULLISH COASLESCING OPERATOR (??) Returns the right side operand when the left is either null or undefined

let c; 

c = 10 ?? 20;
c = null ?? 20; 
c = undefined ?? 30;
c = 0 ?? 30;
c = '' ?? 30;

console.log(c);
