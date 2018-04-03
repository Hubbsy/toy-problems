/* Given a string, write a function to check if the string is a Permutation
of a palindrome.  */

var test = paliPerm("tact coa");
console.log(test)

function paliPerm(input) {

    input = input.replace(/\s+/g, '')

    var letterCounts = {}

    for(var i = 0; i < input.length; i++) {
        var letter = input.charAt(i)
        if (letterCounts[letter]) {
            letterCounts[letter] += 1
        } else {
            letterCounts[letter] = 1
        }

    }

    var oddsCount = 0;

    for (var key in letterCounts) {
        if (letterCounts[key] % 2 != 0) {
            oddsCount++
        }
    }

    return oddsCount <= 1
}
