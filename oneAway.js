/* There are 3 types of edits that can be performed on strings: insert a character,
remove a character, or replace a character.  Given two strings, write a function
to check if they are one edit (or zero edits) away */

function oneAway(string1, string2) {
  var longerString, shorterString
  if (string1.length > string2.length) {
    longerString = string1
    shorterString = string2
  } else if ((string2.length > string1.length) || (string2.length == string1.length)) {
    longerString = string2
    shorterString = string1
  }

  var lengthDifference = longerString.length - shorterString.length

  if (lengthDifference >= 2) {
    return false
  }

  var numberOfEdits = 0
  if (lengthDifference == 0) {
    for(var i = 0; i < longerString.length; i++) {
      if (longerString.charAt(i) != shorterString.charAt(i)) {
        if (numberOfEdits >= 1) {
            return false;
        }
        numberOfEdits++
      }
    }
    return true
  }

  // if lengthDifferece is 1
  var longerStringIterator = 0
  var shorterStringIterator = 0
  while (longerStringIterator < longerString.length) {
    var difference = Math.abs(shorterStringIterator - longerStringIterator)
    if (difference > 1) {
      return false
    }
    var longerStringChar = longerString.charAt(longerStringIterator)
    var shorterStringChar = shorterString.charAt(shorterStringIterator)
    if (longerStringChar == shorterStringChar) {
      longerStringIterator++
      shorterStringIterator++
    } else if (longerStringChar != shorterStringChar) {
      longerStringIterator++
    }
  }
  return true
}
