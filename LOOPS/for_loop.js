/*  syntax 

for ([initialExpression]; [conditionExpression] = [initialExpression]; [incrementExpression]) { statement};

1. INITIAL EXPRESSION: initializes a variable/counter 
2. CONDITION EXPRESSION: Cond that the loop will continue to run as long as it is met or until the condition is false 
3. INCREMENT EXPRESSION: Expression that will be executed after each iteration of the loop. Usually increments the variable 
4. STATEMENT: Code that will be executed after each time the loop is run. 
5. To execute a `block` of code, use the `{}` syntax

*/

for (let i =0; i <= 10; i++) { // 'const' can't be used to store i, cuz i change on every iteration
    console.log('Number ' + i);
}

//conditional statement : check 

for (let i =0; i <= 10; i++) { 
    if (i == 7) {
        console.log('7 is my lucky number')
    } else{
        console.log('Number ' + i);
    }
    console.log('Number ' + i);
}

// NEXT LOOP: check             MULTIPLICATION TABLE 

for (let i = 0; i <= 12; i++) {
    console.log('Number ' + i);

    for (j = 1; j <= 12; j++) {
        console.log(`${i} *  ${j} = ${i * j}`);
    }
}

// LOOP THOUGH AN ARRAY

const names = [ 'Brad', 'Daniel', 'Ayomide', 'Faith', 'John', 'Sarah'];

for (let b = 0; b < names.length; b++) {

    console.log(names[b]);
}

// write a statement the prints 'Ayomide is the best'

const name = [ 'Brad', 'Daniel', 'Ayomide', 'Faith', 'John', 'Sarah'];

for (let c = 0; c < name.length; c++) {

    if (c == 2){ // use the index directly or put the value in a s
        console.log(`${name[c]} is the best`);
    } else {
        console.log(name[c]);
    }
    
}
