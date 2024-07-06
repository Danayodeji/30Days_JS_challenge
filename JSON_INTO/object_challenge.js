 /*
 # Object Challenge

### Step 1

Create an array of objects called `library`. Add 3 objects with a property of `title`, `author`, `status`. Title and author should be strings (whatever value you want) and status should be another object with the properties of `own`, `reading` and `read`. Which should all be boolean values. For all status, set `own` to `true` and `reading` and `read` to false.

### Step 2

You finished reading all of the books. Set the `read` value for all of them to `true`. Do not edit the initial object. Set the values using dot notation.

### Step 3

Destructure the title from the first book and rename the variable to `firstBook`

### Step 4

Turn the library object into a JSON string. There is a specific function that we looked at in the last section that we can use to do this.
 */

// STEP 1:

    const library = [
        {
            title : 'First Book',
            author: 'John',
            status: {

                own: true,
                reading: true,
                read: false,
            }
        },             
        {
            title : 'second Book',
            author: 'John',
            status: {

                own: true,
                reading: true,
                read: false,
            }
        },            
        {
            title : 'third Book',
            author: 'John',
            status: {

                own: true,
                reading: true,
                read: false,
            }
        }

    ];

    console.log(library);

// STEP 2: You finished reading all of the books. Set the `read` value for all of them to `true`. Do not edit the initial object. Set the values using dot notation.

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);

// STEP 3: Destructure the title from the first book and rename the variable to `firstBook`

const [
    {
        title: firstBook,
        author,
        status:{
            own,
            reading,
            read
        }
    }    
] = library;

console.log(firstBook);

// STEP 4: Turn the library object into a JSON string. There is a specific function that we looked at in the last section that we can use to do this.

const jFile = JSON.stringify(library);
console.log(jFile);

