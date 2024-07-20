const colorObj = {
    color1 : 'red',
    color2 : 'blue',
    color3 : 'green',
    color4 : 'yellow',
    color5 : 'purple',
    color6 : 'pink',
    color7 : 'orange',
    color8 : 'brown'
};

for (col in colorObj) {
    console.log(col, colorObj[col]);
} 

// Looping through array

const colorArray = ['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'orange', 'brown'];

for (const color in colorArray) {
    console.log(colorArray[color]);
}