// 1 
// Capitalize Challenge
// Take the variable myString and capitalize the first letter of the word using some of the methods that we talked about in the last video. Put the result in a variable called myNewString.

// const myString = 'developer';
// console.log(myNewString); // 'Developer'

const myString = 'developer';

// const myNewString = myString.toUpperCase().charAt(0) + myString.slice(1,9);
// const myNewString = myString.toUpperCase().slice(0,1)+myString.slice(1,9);
// const myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
// const myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`
// console.log("Problems:-",myNewString);


// 2
// Reverse a String
// Expected Result: "dlrow olleh"

const stringValue = "helloWorld";

const split = stringValue.split("");
console.log("Reverse String:-",split, typeof split);

const fruits = ["Banana", "Orange", "Apple", "Mango", "Chickoo"];
const points = [40, 100, 1, 5, 25, 10];

console.log(stringValue.split('').reverse())
console.log("fruits sorting", fruits.sort())
console.log("fruits reversed", fruits.reverse())
console.log("fruits join",fruits.join(''));
console.log("points sorting", points.sort());
console.log("points reverse", points.reverse());

const reverseValueCheck = stringValue.split('').reverse().join("");
console.log("reverseValueCheck reverseValueCheck:---",reverseValueCheck)

const numericValue = [40, 100, 1, 5, 25, 10];

function compare(a,b){
 return Number(a)-Number(b);
}
const answer = numericValue.sort(compare).reverse('');
console.log("numeric answer", answer);



// 3
// Check if a String is a Palindrome
const palindromTest = "racecar";

// const palindromOutput = 
function palindromOutput(arguments){
    const output =  arguments.split('').reverse().join('');
     return output === arguments;
}
console.log("palindromTest:----",palindromOutput(palindromTest))


// 4
// Count Vowels in a String
const myValue = "hello world";

const vowelsCheck = (arguments) => {

    let Vowels = "aeiouAEIOU";

    let count = 0;
    for(let char of arguments){
        if(Vowels.includes(char)){
             count++;
        }
    }
    return count;
}
console.log("vowelsCheck:---", vowelsCheck(myValue));

// 5
// Replace All Occurrences of a Substring
// function replaceAllOccurrences(str, search, replacement) {
//     return str.split(search).join(replacement);
// }

// let myString = "hello world, hello universe";
// let myNewString = replaceAllOccurrences(myString, "hello", "hi");
// console.log(myNewString); // "hi world, hi universe"


// 6
// Find the Longest Word in a String

// function findLongestWord(str) {
//     let words = str.split(' ');
//     let longestWord = words[0];
//     for (let word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }
//     return longestWord;
// }

// let myString = "The quick brown fox jumps over the lazy dog";
// console.log(findLongestWord(myString)); // "jumps"


// 7
// Count the Number of Words in a String
// function countWords(str) {
//     let words = str.trim().split(/\s+/);
//     return words.length;
// }

// let myString = "The quick brown fox jumps over the lazy dog";
// console.log(countWords(myString)); // 9


// 8
// Extract a Substring
// function extractSubstring(str, start, length) {
//     return str.substr(start, length);
// }

// let myString = "hello world";
// let mySubstring = extractSubstring(myString, 6, 5);
// console.log(mySubstring); // "world"

// 9
// Convert a String to Title Case
// function toTitleCase(str) {
//     return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// }

// let myString = "the quick brown fox jumps over the lazy dog";
// let myTitleCaseString = toTitleCase(myString);
// console.log(myTitleCaseString); // "The Quick Brown Fox Jumps Over The Lazy Dog"


// 10
// Remove Whitespace from a String
// function removeWhitespace(str) {
//     return str.replace(/\s+/g, '');
// }

// let myString = "   hello    world   ";
// let myNewString = removeWhitespace(myString);
// console.log(myNewString); // "helloworld"
