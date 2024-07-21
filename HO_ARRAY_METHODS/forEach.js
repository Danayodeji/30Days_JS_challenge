// FOR EACH : loops through an array without returning any result 

const social = ['Linkedin', 'Twitter', 'Facebook']

// console.log(social.__proto__);

/*
// Passing in anonymous function (callback function)

social.forEach(function(item) {
    console.log(item);
});

*/

// passing in parameters with arrow functionn to print the index and each element

// social.forEach ( (item, index, arr) => console.log(`${index} - ${item}`, arr));
 

// passing in a named function

function logSocial(social) {  // creating the function
    console.log(social);
}


social.forEach(logSocial); // calling the function with the array as argument   


// Looping through objects 

    const socialObj = [
        {name: 'Twitter', url: 'http://twitter.com'},
        {name: 'Facebook', url: 'http://facebook.com'},
        {name: 'Instagram', url: 'http://instagram.com'}
    ];

    socialObj.forEach( (network, index, arr) => console.log(`${index} - ${network.name}: ${network.url}`, arr));