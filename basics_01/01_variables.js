//ways to declare a variable
//var, let, const

let firstName = "Mohit";
let lastName = "Garg";

console.log(firstName,...lastName); //Output  Mohit G a r g (...spread operator)
// console.log(firstName,lastName,age);

let age = 30;         // always declare a var before console.else it show error

// console.error('alert');
// console.warn('warning');

// console.table({"name":"mohit","age":29})  //output in table format

function test(){
    let a=1;
    if(true){
        let a=2;
        console.log("inside the scope",a);
    }
    console.log("outside the scope",a);

}
test()

// let a=1;
// let a=2; // Syntax error: Cannot redeclare block-scoped variable 'a'

//** Hoisting with var
// console.log(x);
// var x="mohit"
// The code will output undefined. This is because var declarations are hoisted to the top of their scope, but their assignments are not. Therefore, the variable x is hoisted and initialized with undefined before the console.log statement is executed.


//Temporal Dead Zone with let and const
// console.log(x);
// let x= 5;
// Output: Reference error   let variables are not accessible before they are declared. This period is known as the Temporal Dead Zone.



//Scoping in Loops
// for(var i=0; i<3; i++){
//     setTimeout(()=>console.log("var loop scope in loop",i),1000);
// }

// Function scope
//The first loop with var will output 3 three times because var is function-scoped and the variable i retains its value after the loop ends (which is 3).

// for(let i=0; i<3; i++){
//     setTimeout(()=>console.log("let loop", i),1000);
// }

//Block scope
//The second loop with let will output 0, 1, and 2 because let is block-scoped, and each iteration of the loop creates a new binding of j.


//Const with Array[] & Object{}

const obj = {a:1}
obj.a=2;
// console.log('Object{} output', obj.a);
//The code will log 2 because while const prevents re-assignment of the variable obj, it does not make the object itself immutable. The properties of the object can still be changed.

const arr = [1,2,3];
arr.push(4);
// console.log('Array[] output', arr);
// The code will log [1, 2, 3, 4] because, similar to the object case, const prevents re-assignment of the variable arr, but it does not prevent modification of the array's contents.


//Advance javascript problems
for( var i=0; i<=5; i++){
    setTimeout(()=> console.log("Through var loop:",i) ,i * 1000)
}

// for(let j=0; j<3; j++){
//     setTimeout(()=> console.log("Through let variable",j), j*1000)
// }





