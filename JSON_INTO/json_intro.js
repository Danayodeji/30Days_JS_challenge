// JSON is human readable way of storing data 

// data same is = https://api.github.com/users (an array of first 20 users of github - my name is not inside😆)

// a valid JSON have double quotes around the keys. keys ans values must be properly double quoted when in a json file
    
 //HOW TO CONVERT OBJECT TO JSON AND INVERSE

        //This is a javascript object literal👇

 const post = {
    id: 1,
    title: 'post one',
    body : 'this is the body of post'     
 }

        // to convert into a JSON string (stringify)

const str = JSON.stringify(post); // the output = json string (and it the format to be sent to server)
console.log(str);

        // to convert back into an object (parse)

const obj = JSON.parse(str); // the output = json object 
console.log(obj);

        // with an array of objects (stringify)

const posts = [
    {
        id: 1,
        title: 'post one',
        body : 'this is the body of post'     
     },
     {
        id: 1,
        title: 'post one',
        body : 'this is the body of post'     
     }
];

        //converting to json string
const str2 = JSON.stringify(posts);
console.log(str2);

        // converting back to array of objects 
const obj2 = JSON.parse(str2);
console.log(obj2);

// values of properties cannot be accessed when in JSON string format. Instead, it must be convert first into object. it then can be accessed that way. 