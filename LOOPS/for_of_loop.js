
// Looping through arrays

const items = ['book', 'table', 'chair'];

for (const item of items) {
    console.log(item);
}

//Looping through object in an array

const users = [
    { name : 'Ayomideji'},
    { name : 'Faith'},
    { name : 'Mide'}
]

for (const user of users) {
    console.log(user.name);
}

// Looping over strings

const str = 'Hello World';

for (const letter of str) {
    console.log(letter);
}

// Looping over map 

const map = new Map();
map.set('name', 'James');
map.set('age', 30);

for (const [key, value] of map) {
    console.log(key, value);
}




