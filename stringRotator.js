/* Assume you have a method isSubstring which checks if a word is a substring.
Given two strings, see if the second string is a rotation of the first string*/

var test = stringRotator("hello", "elloh")
console.log(test);

function stringRotator(string1, string2) {
    var duplicatedString2 = string2.concat(string2).concat(string2)
    return duplicatedString2.includes(string1)
}
