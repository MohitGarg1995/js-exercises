// Convert to number
let username = "mohit";
let nameConvert = Number(username);
let nameconveert = parseInt(username);

// console.log("username: type of username", typeof username);
// console.log("convert to number:--", typeof nameConvert);
// console.log("another way to convert:---", typeof nameconveert); 


// Convert to string
let userAge = 33;
let convertedAge = String(userAge);
let convertage = toString(userAge);

// console.log("convert number to string:--",typeof convertedAge, userAge)
console.log("another way to convert:---",typeof(convertage));


const currentDate = new Date()
// const currentDate_string = String(currentDate);
const currentDate_string = currentDate.toString();
console.log("Today Date is:-",currentDate_string, typeof currentDate_string)


// Note:-  But if the string is something like this "333abhj"  ==> NaN  it show not a number.

// if u use null then it display 0 let name = null;
// for undefine it display NaN     let name = undefined;
// for boolean value it display ( true & false  1 & 0  )let score = true;



//Convert to Boolean
let userLoginId = "MHT31";
let id = 1;        // if id is 0 it print false
let score = ""     // for empty string  (Output is False);

let convertBoolean = Boolean(userLoginId);
let convertBool = Boolean(id);
let convertScore = Boolean(score);


// console.log("Convert to Boolean:--", userLoginId, typeof(convertBoolean));
// console.log("Convert to Boolean:--", id, typeof(convertBool));
// console.log("Convert to Boolean:--",score, typeof(convertScore));


// 1 => true   0 => false
// "" => False  "name" => True





// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);


//complex problems

console.log("First", 2 +"2");   //Output:- 22
console.log("Second", "2" + 2); //Output:- 22
console.log("Third", "1" + 2 + 3); //output:-123
console.log("Fourth", 2+3+"2");  //output:- 52


// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion


// Ways to get NaN
// console.log(Math.sqrt(-1));
// console.log(1 + NaN);
// console.log(undefined + undefined);
// console.log('foo' / 3);

