/*
BREAK:  exit out of loop once a condition is met 
*/
// stop the loop at 15

for (let i =0; i <= 20; i++) {
    if (i === 15) {
        console.log('breaking.....');
        break
    }
    console.log(i);
}

// CONTINUE: It skips over certain iterations without exiting the loop entirely

// skipping 13

for (let a = 0; a <= 20; a++) {
    if (a === 13) {
        console.log('Skipping 13.....');
    }
    console.log(a);
}