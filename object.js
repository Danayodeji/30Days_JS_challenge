// USING SPREAD OPERATOR WITH OBJECT 

   // creating empty object in 2 ways 

   const todo = {};
   todo.id = 1;
   todo.name = 'Daniel';

   console.log(todo);

    // a second way 

    const todo2 = new Object();
    todo2.id = 2;
    todo2.name = 'Ayodeji';

    console.log(todo2);

    
    const person4 = {
        address: {
            coords: {
                lat: 42.9384,
                lng: -71.3232
            }
        }
    };
    // accessing the property of nested objects
    y = person4.address.coords.lat;
    console.log(y); 

    const obj1 = {};
    obj1.a = 1;
    obj1.b = 2;
    console.log(obj1);

    const obj2 = {};
    obj2.c = 3;
    obj2.d = 4;
    console.log(obj2);

    // applying spread method to objects
    const obj3 = {...obj1, ...obj2};
    console.log(obj3); 
    // applying assign method to objects
    const obj4 = Object.assign({}, obj1, obj2);
    console.log(obj4); 

    //display the value of c 
    d = obj3.c;
    console.log(d);

//creating array of objects

const todos = [
    {id : 1, name : 'Mide'},
    {id : 2, name : 'Ayomide'},
    {id : 3, name : 'Faith'}
];

// accessing Faith
q = todos[2];
console.log(q);

//accessing the name only
q = todos[2].name;
console.log(q);

// how to collect all objects keys and store them into array... this is the way to get the length of an object since the lenght method does not work on objects but works on arrays. storing the keys of an object in an array will make it possibe to get the length of the object's properties

q = Object.keys(todo);
console.log(q);

//to check the lenght of the objects
q = Object.keys(todo).length;
console.log(q);

// getting an object's values and store in an array

q = Object.values(todo);
console.log(q);

// getting the length of an object values using the same way as above 

q = Object.values(todo).length;
console.log(q);

//getting the key and value pairs of an object into an array

q = Object.entries(todo);
console.log(q);

// checking if an object has a specific property (boolean)

q = todo.hasOwnProperty('name');
console.log(q);

    
// DESTRUCTURING AND NAMING = useful in situation where the value is same as key in an object (example below👇)

// first RENAMING

const firstName = 'Daniel';
const lastName = 'Obamiyi';
const age = 15;
const city = 'Lagos';
const gender = 'Male';	
const email = 'daniel@gmail.com';

const person5 = {
    firstName : firstName,
    lastName : lastName,
    age : age,
    city : city,
    gender : gender,
    email : email,  
};
console.log(person5);

// applying renaming would go like this 👇👇
const person6 = {
    firstName,
    lastName,
    age,
    city,
    gender,
    email,
};
console.log(person6); // still work like this saving typing time and code complexity

                          // DESTRUCTURING 

const todo3 ={
    id : 1,
    title : 'Take out trash',
    userName: {
        name : 'Ayoddeji',
     },
}

// destructuring (inverting the position of object variable and its properties to modify the properties) is more like pulling a variable from the object, letting the key act like a variable whereas it's not (example👇👇) the properties to be destructured comes first while the variable is at the end.

const {
    id,
    title,
     userName: {name}, // Note: 👈This is destructuring 
    } = todo3;

console.log(id, title, name);

// using destructuring i could also RENAME the KEYS which is also the properties 

const {
    id: todo3id, // 👈This is renaming 
    title: todo3title,
} = todo3;

console.log(todo3id, todo3title );


        // DESTRUCTURING IN ARRAYS

const number = [23, 67, 33, 49];
const [firs, secon] = number;

console.log(firs, secon); // this will display the first two element in the array. Now here the crazy part😖, if i want to automatically display the remaining elements in an array i will you the REST OPERATOR. This operator (REST OPERATOR) can be a bit confusing because it represented by (...), same as SPREAD OPERATOR in this context however, the (...) works as the REST OPERATOR😆 

// using the REST OPERATOR
const num = [1, 2, 3, 4, 5, 6, 7, 8];
const [first, second, third, ...rest] = num; // distructuring automatically assigns variable for each element in an array ('rest' can be anything)

console.log(first, second, rest); 








