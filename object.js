// USING SPREAD OPERATOR WITH OBJECT 

   // creating empty objectin 2 ways 

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

// how to collect all objects keys and store them into arra... this is the way to get the length of an object since the lenght method does not work on objects but works on arrays. storing the keys of an object in an array will make it possibe to get the length of the object's properties

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

