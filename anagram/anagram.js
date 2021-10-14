// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman


// function validAnagram(str1, str2){
//     if(str1.length !== str2.length) return false;
//     const counter1 = {};
//     const counter2 = {};
//     for (let char of str1) {
//         counter1[char] = (counter1[char] || 0) + 1;
//     }
//     for (let char of str2) {
//         counter2[char] = (counter2[char] || 0) + 1;
//     }
//     for (let key in counter1) {
//         if (!key in counter2) return false;
//         if (counter1[key] !== counter2[key]) return false;
//     }
//     return true;
// }

// The better solution below

function validAnagram(str1, str2){
    if(str1.length !== str2.length) return false;
    const lookup = {};
    for (let char of str1) {
        lookup[char] ? lookup[char] += 1 : lookup[char] = 1;
    }
    for (let char of str2) {
        if(lookup[char]) {
            lookup[char] -= 1;
        } else {
            return false
        }
    }
    return true;
}




module.exports = validAnagram;