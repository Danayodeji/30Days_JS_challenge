
/*

KEY NOTE:

- While loop is used when the number of times the loop should run is not known \
- for loop is used when the number of times is known 

*/

// WHILE 
let i = 0;

while (i <=20) {

    console.log(`Number ${i}`);
    i++
}

// Looping over array
let a = 0;

const arr = [10, 20, 30, 40];

while (a < arr.length) {

    console.log(arr[a]);
    a++;
}

// NESTING WHILE LOOP               MULTIPLICATION TABLE
let c = 0;


while (c <= 5) {
    console.log('Number ' + c);
    

    let d = 0;
    while (d <= 6) {
        console.log(`${c} * ${d} = ${c * d}`);
        d++

    }
    c++
}


/* 
DO WHILE LOOP:  will always run at least once even if the condition is false

Usage: used when a block of code is to run at least once even if the block of code is never met

*/
let e = 0;

do {
    console.log('Number '+ e);
    e++;

} while (e <=20);