/* Given a number of rounds n, return all the possible rock-paper-scissors play
possibilities for that number of rounds. */

function rockPaperPermutation (roundCount) {
  var letters = ["r", "p", "s"];
  var result = [];

  if (roundCount === 0) {
    return result;
  }

  if (roundCount === 1) {
    return letters;
  }
  else {
    var prevCall = rockPaperPermutation(roundCount - 1);
    for (var i = 0; i < letters.length; i++) {
      var currentEl = letters[i];
      for (var j = 0; j < prevCall.length; j++) {
        result.push(currentEl + prevCall[j]);
      }
    }
  }
  return result;
}
