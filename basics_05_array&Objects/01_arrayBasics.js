let x;

// Array Literals
const numbers = [10,20,30,40,50,91,14];
const mixed = [12,'hello',92,"ju"];


// Array Constructor
const fruits = new Array('apple', 'grape', 'orange');

// Array Constructor:-------

// new Array() is the array constructor in JavaScript.
// When called with multiple arguments, it creates a new array and assigns the arguments as its elements.

// The fruits variable will hold a reference to this newly created array, which is equivalent to writing:
// const fruits = ['apple', 'grape', 'orange'];

// Usage:
// This array can be accessed and manipulated like any other array in JavaScript. For example:

console.log(fruits);         // Outputs: ['apple', 'grape', 'orange']
console.log(fruits[0]);      // Outputs: 'apple'
console.log(fruits.length);  // Outputs: 3
fruits.push('banana');       // Adds 'banana' to the end of the array
console.log(fruits);         // Outputs: ['apple', 'grape', 'orange', 'banana']


// Get value by index:--

x = numbers[0];


console.log(x);

const arrayValuess = [1,2,3,4,5];
// [6, 5, 4, 3, 2, 1, 0];

 arrayValuess.push(6);
 arrayValuess.unshift(0);
 arrayValuess.reverse();
console.log("push:-",arrayValuess);


const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// const arr3 = `${arr1},${arr2}`
const arr3 = arr1.slice(0,4).concat(arr2);

console.log("concat",arr3);


const library = [{
    title : "The Lord of Ring",
    author : "Mohit Garg",
    status : {
        own : true,
        reading : false,
        read : false
    }
},
{
    title : "The Lord of Ring",
    author : "Raja",
    status : {
        own : true,
        reading : false,
        read : false
    }
},
{
    title : "The Lord of Ring",
    author : "Deepsa Garg",
    status : {
        own : true,
        reading : false,
        read : false
    }
}];

const readinValue = library[0].status.reading = true;
library[1].status.reading = true;
library[2].status.reading = true;


console.log("readinValue:-", readinValue);
console.log("arrayOfObject :-----", library[2].status.reading);
console.log("Turn Library object:--", JSON.stringify(library));
 