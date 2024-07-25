const numbers = [1, 2, 3,4, 5, 6, 7, 8, 9, 10];

const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers); 

// Same with forEach function

const doubledNumbers2 = [];

numbers.forEach((number) => {
    doubledNumbers2.push(number * 2)
});

console.log(doubledNumbers2);

// map on array of object

const companies = [
    {name: 'Company One', category: 'Finance', start: 1981, end: 2004},
    {name: 'Company Two', category: 'Retail', start: 1992, end: 2008},
    {name: 'Company Three', category: 'Technology', start: 2007, end: 2015},
    {name: 'Company Four', category: 'Finance', start: 1985, end: 1998},
    {name: 'Company Five', category: 'Auto', start: 2002, end: 2019},
    {name: 'Company Six', category: 'Finance', start: 1999, end: 2005},
    {name: 'Company Seven', category: 'Retail', start: 1985, end: 1998},
    {name: 'Company Eight', category: 'Technology', start: 2012, end: 2019}

 ];

// create an array of company names 

const companyNames = companies.map((company) => company.name);
console.log(companyNames);

// create an array with just company and category

const companyAndCategory = companies.map((company) => {
    return {
        name:company.name, 
        category: company.category
    }
});

console.log(companyAndCategory);

// create an array of object with the name and the length of each company in years 

const companyYears = companies.map((company) => {
    return {
        Company_name: company.name,
        years: company.end - company.start + ' years'
    }
});
console.log(companyYears);

// Chain map methods; using multiple map methods
const squareAndDouble = numbers
    .map((number) => Math.sqrt(number)) // whatever that is gotten from the first map method will be put into the second map method
    .map((sqrt) => sqrt * 2)

console.log(squareAndDouble);

// using a longer method

const squareAndDouble2 = numbers
    .map(function(number) {
        return Math.sqrt(number)

    })
    .map (function(sqrt) {
        return sqrt * 2;
    })
    .map (function(sqrtdouble) {
        Math.round(sqrtdouble);
    })

    // chaining different methods 

    const evenDouble = numbers

    numbers
    .filter((number) => number % 2 ===0)
    .map((num) => num * 2);