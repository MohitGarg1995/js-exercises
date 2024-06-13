// * Problem 1: Hoisting and Closures
 for(var i=0; i<3; i++){
    // setTimeout(()=>console.log(i) ,i * 1000);
 }

 //OUTPUT: it prints 3 3 3 because it retains its value & var is a Functional scope.
//  The first loop with var will output 3 three times because var is function-scoped. The variable i retains its value after the loop ends, which is 3 by the time the setTimeout callbacks execute.

for(let i=0; i<3; i++){
    // setTimeout(()=> console.log(i), i*1000);
}
//OUTPUT: The second loop with let will output 0, 1, 2 with a delay because let is block-scoped. Each iteration of the loop creates a new binding of j that is scoped to that iteration.


//  * Problem 2: Immediately Invoked Function Expression (IIFE) with var

for(var i=0; i<3; i++){
(function immidiateInvokefn(i){
    // setTimeout(()=> console.log(i), 1000);
})
(i)
}
//You can use an IIFE to create a new scope for each iteration



//  *  Problem 3: const and Object Freezing
const obj = {a:1, b:2}
Object.freeze(obj);
obj.a = "mohit";
// console.log(obj)

const array = [1,"ram",2,3];
// Object.freeze(array)
// array.push(6);
// console.log(array)


//  * Problem 4: Temporal Dead Zone (TDZ) with Nested Scopes

function Outer(){
    // console.log(a)            //It become Temporal dead zone here.
    let a=1;
    function Inner(){
        // console.log(a)
        let a=2;
    }
    Inner();
}
Outer();



//  * Problem 5: const with Function Expressions

const func = function() {
    console.log('Hello, World!');
};

func();

// const func = function() {
//     console.log('Hello again!');      // HERE IS THE ERROR U CAN'T REDECLARE & REASSIGN IN CONST
// };



// *  Problem 6: Destructuring and const

const { a, b } = { a: 1, b: 2 };
console.log(a, b);   // output is 1 2.

const { c, d } = { c: 3 };
console.log(c, d);  //output is 3 & undefined.


//  * Problem 7: Block scope & function scope interaction

{
    let name="mohit"
    var num= 2              // its global scope also.
}
// console.log(typeof name);   // undefined because of let variable  {block scope}
// console.log(typeof num);    // here type is number   var has a functional scope   & Global scope also



function scopesDefination(){
    var name="mohit";
    let age =30;
    // let age=55;  u cannot redeclare the value its show error.
    // age=55       this is true u can do this.
    // console.log("age of let variable",age)
}
scopesDefination()

// console.log("accesing from out side ",name, age);   // error