
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





// IF STATEMENT 


const d = new Date(10, 30, 2022, 8, 0, 0);

const hour = d.getHours();


if (hour < 12) {
    console.log('Good morning');
 
}else if (hour < 18) {
    console.log('Good afternoon');
} else {
    console.log('Good Night');
}






 
// NEXT IF


if (hour < 12) {
    console.log('Good morning');

    if (hour === 6) {
        console.log('Wake Up!');
    }
}else if (hour < 18) {
    console.log('Good afternoon');
} else {
    console.log('Good Night');

    if (hour >= 20) {
        console.log('zzzzzzzzzzzz');
    }
}


if (hour >= 7 && hour < 15) {
    console.log('It is work time!');

    if (hour === 6 || hour === 20) {
        console.log('Brush your teeth');
    }
}



    