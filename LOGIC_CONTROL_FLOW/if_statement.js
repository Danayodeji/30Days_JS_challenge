
//  IF STATEMENT 
if (true) {
    console.log('This is True');
}

if (false) {
    console.log('This is not true');
}


// example using variables

const b = 10;
const c = 5;

if (b > c) {
    console.log(`${b} is greater than ${c}`);
} else {
    console.log('Not greater');
}

if (b === c) {
    console.log(`${b} is equal to  ${c}`);// will not run 
} else {
    console.log('Not equal');
}

// shorthand IF = without the curly brackets

if (b > c) console.log(`${b} is greater than ${c}`);
else console.log('This is false');

