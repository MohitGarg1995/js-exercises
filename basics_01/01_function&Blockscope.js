// Function Scope :-------------
// Function scope means that variables defined inside a function are only accessible within that function.  Variables declared with var are function-scoped.

function exampleFunction() {
    var a = 1; // a is function-scoped
    console.log(a); // 1
}

exampleFunction();
// console.log(a); // ReferenceError: a is not defined


// Function Scope with Nested Functions:

function outerFunction() {
    var outerVar = 'I am outside!';
    
    function innerFunction() {
        var innerVar = 'I am inside!';
        console.log(outerVar); // Accessible
        console.log(innerVar); // Accessible
    }

    innerFunction();
    // console.log(innerVar); // ReferenceError: innerVar is not defined
}

outerFunction();





//Block Scope:----------------------
// Block scope means that variables defined inside a block (e.g., within {}) are only accessible within that block. Variables declared with let and const are block-scoped.

{
    let x=5;
    const y=7;

    console.log("block scope",x);
    console.log("block scope",y);
}

// console.log(x)  // ReferenceError: x is not defined
// console.log(y)  // ReferenceError: y is not defined


// Block Scope in Loops:
for(let i=0; i<3; i++){
    console.log("inside the scope",i);
}
// console.log("outer scope",i);   // ReferenceError: i is not defined



if (true) {
    let a = 1;
    const b = 2;
    console.log(a); // 1
    console.log(b); // 2
}

// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined



// Combining Function and Block Scope:
function testScope() {
    var funcVar = 'function scope';
    if (true) {
        let blockVar = 'block scope';
        console.log(funcVar); // Accessible: 'function scope'
        console.log(blockVar); // Accessible: 'block scope'
    }
    // console.log(blockVar); // ReferenceError: blockVar is not defined
}

testScope();




// Temporal Dead Zone (TDZ)

{
    // console.log(a); // ReferenceError: a is not defined
    let a = 1;
    // console.log(a); // 1
}

{
    // console.log(b); // ReferenceError: Cannot access 'b' before initialization
    const b = 2;
    // console.log(b); // 2
}




// Function Scope: Variables declared with var are scoped to the function. They are accessible within the entire function, even before the declaration due to hoisting.

// Block Scope: Variables declared with let and const are scoped to the block they are defined in. They are not accessible outside that block.

// Temporal Dead Zone: Variables declared with let and const cannot be accessed before their declaration within their block.





// Using let (Block Scope)

function exampleFunction() {
    if (true) {
        let a = 1; // a is block-scoped
        console.log(a); // 1
    }
    // console.log(a); // ReferenceError: a is not defined
}

exampleFunction();


// Detailed Explanation of Block Scope with let

function exampleFunction() {
    let a = 1; // a is block-scoped to the function block

    if (true) {
        let b = 2; // b is block-scoped to the if block
        console.log(a); // 1 (a is accessible here)
        console.log(b); // 2 (b is accessible here)
    }

    console.log(a); // 1 (a is accessible here)
    // console.log(b); // ReferenceError: b is not defined (b is not accessible here)
}

exampleFunction();


// Comparing var and let in a Function

function practiceFunction(){
    let xx=9;
    var yy=10
    if (true){
        let x = 69;
        var y = 12;
        console.log("Access from outer side",xx);
        console.log("Access in innner yy",yy);
    }
    // console.log("Already outer side",x);
    console.log("try to acces innr", y);
}

practiceFunction()



//another example
function exampleFunction() {
    var x = 1; // x is function-scoped
    let y = 2; // y is block-scoped

    if (true) {
        var x = 3; // re-declares and updates x within the function scope
        let y = 4; // y is block-scoped to this block
        console.log(x); // 3 (the updated value of x)
        console.log(y); // 4 (block-scoped y)
    }

    console.log(x); // 3 (x is function-scoped and was updated)
    console.log(y); // 2 (y is still the same block-scoped variable from the function block)
}

exampleFunction();


// Another example

// Predict the output of the following code:

var a = 10;
{
    var a = -10;
}
let b = a;
{
    let b = -20;
}

console.log(b)

// -20 -10 10 undefined