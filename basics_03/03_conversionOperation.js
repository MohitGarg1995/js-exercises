// Convert to number
let username = "mohit";
let nameConvert = Number(username);

console.log("username: type of username", typeof username);
console.log("convert to number:--", typeof nameConvert);


// Convert to string
let userAge = 33;
let convertedAge = String(userAge);

console.log("convert number to string:--",typeof convertedAge, userAge)


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


console.log("Convert to Boolean:--", userLoginId, typeof(convertBoolean));
console.log("Convert to Boolean:--", id, typeof(convertBool));
console.log("Convert to Boolean:--",score, typeof(convertScore));


// 1 => true   0 => false
// "" => False  "name" => True