const age = 19;

// Ternary operator is a shorter way for writing conditions 

// 1: Using an IF STATEMENT 
if (age >= 18) {
    console.log('You can vote!');
} else {
    console.log('You can not vote')
}
  // 2: Using a TERNARY OPERATOR

   age >= 18 ? console.log('You can vote!') : console.log('You can not vote'); //the question mark is the ternary which function as the IF 

// 3: Assigning a conditional value to a variable using a ternary operator

const canVote =age >= 18 ? true : false; // boolean value
console.log(canVote);

const canVote1 =age >= 18 ? 'Ýou can vote' : 'you can not vote'; // string value

console.log(canVote1);


// 4. Multiple Statement with the IF and Else statement

// long verion 

const auth = true; 
let redirect;

if (auth) {
    alert('Welcome to the dashboard');
    redirect = '/dashboard'
} else {
    alert('Access denied!')
    redirect = '/login';	
}

// console.log(redirect);

// shorter version using the ternary operator

let auth1 = true; // 

const redirect2 = auth1 
? (alert('Welcome to the dashboard'), '/dashboard') 
: (alert('Access denied'), '/login');	

// console.log(redirect2);

// 5. short-hand version using the ternary operator

// in the case of conditions that doesn't have an else

// e.g. evalutaing whether auth1 is true or not 

auth ? console.log('Welcome to the dashboard') : null;

auth && console.log('Welcome to the dashboard');




