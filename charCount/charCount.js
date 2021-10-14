// Write a function which takes in a string and returns counts of each character in the string

// charCount("aaaa");
// /* {
//     a: 4
// } */

// charCount("hello");
// /* {
//     h: 1,
//     e: 1,
//     l: 2,
//     o: 1
// } */

// function charCount(str) {
//     // do something
//     // return new object
// }

// function charCount(str) {
//     // make object to return at end
//     // loop over string for each character...
//         // if char is a number/letter AND key in object, add one to count
//         // if char is a number/letter AND NOT in object, add it and set value to 1
//         // if char is something else (space, period, ect.) don't do anything
//     // return object at end
// }

// function charCount(str) {
//     const totals = {};
//     for(let i = 0; i < str.length; i++) {
//         let currentChar = str[i].toLowerCase();
//         if (/[a-z0-9]/.test(currentChar)) {
//             if (totals[currentChar] > 0) {
//                 totals[currentChar] += 1;
//             } else {
//                 totals[currentChar] = 1;
//             }
//         }
//     }
//     return totals;
// }

// function charCount(str) {
//     const totals = {};
//     for(let char of str) {
//         char = char.toLowerCase();
//         if (/[a-z0-9]/.test(char)) {
//             totals[char] = ++totals[char] || 1
//         }
//     }
//     return totals;
// }

// console.log(charCount("Hello hi!"))


function charCount(str) {
    const totals = {};
    for(let char of str) {
        if (isAlphaNumberic(char)) {
            char = char.toLowerCase();
            totals[char] = ++totals[char] || 1
        }
    }
    return totals;
}

console.log(charCount("Hello hi!"))




function isAlphaNumberic(char){
    let code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) &&  // numeric (0-9)
        !(code > 64 && code < 91) &&  // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
            return false;
        }
    return true;
}