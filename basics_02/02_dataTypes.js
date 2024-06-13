// Primitive data types
// * String= ""
// * Number = 2
// * Boolean = True false
// * undefined = { empty }   e.g:- let name   type is undefined
// * null =   var name = null    it's type is object 
// * Symbol 
// * BigInt = 453325898



// Reference types (Objects)
//   Reference types or "Objects" are non primitive value and when assigned to a variable, 
//   the variable is given reference to that value.

// Object literal  { "key": value}
// Array            [ ]            it's type is object.
// Functions        ()


// Primitive data types are stored in the "STACK" and accessed by its value.
// Stored directly in the Stack where it is access from.

// Reference data types are stored in the "HEAP" and  accessed by its reference variable
// Stored in the Heap and accessed by reference.


// Random example:--
const config = {
    name:"wifi",
    baseurl:"http://home/agian",
    apikey: "123789",
    timeout: 1000
}

function gettheAddress(pass){
    return pass;
    // console.log("Details here:", pass);
}

console.log("Functione executed",gettheAddress(config));