/*
FILTER : in most cases return array
NOTE: for each on the other hand does not return anything that's in for each you can never see a variable equal for each as if to store the resul. 

*/ 


// Example 1: Filtering an array to include only words with more than 6 characters

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction'];

const result = words.filter(word => word.length > 6);

console.log(result);  // Output: ['exuberant', 'destruction']

 
// Example 2: Filtering an array to include only odd numbers

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = numbers.filter(odd => odd % 2 ===1)

console.log(oddNumbers);// Output: [1, 3, 5, 7, 9]

 // doing same with for each: no return!

 const number = [];

 numbers.forEach( (num) => {
    if (num % 2 === 1) {
        numbers.push(num);
    }
 }
 );

 console.log(numbers);

 // Example 3: 

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

 // Get only retail companies 

 const retailCompanies = companies.filter(company => company.category === 'Retail');
 console.log(retailCompanies);

 // get companies that started in or after 1980 and ended in or before 2005

 const earlyCompanies = companies.filter(company2 => company2.start >= '1980' && company2.start <= '2005');
 console.log(earlyCompanies);

 // get companies that lasted 10 years or more 

 const lastedCompanies = companies.filter(company3 => company3.start >= '2014');
 console.log(lastedCompanies);