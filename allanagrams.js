/* Given a single input string, write a function that produces all possible anagrams
of a string and outputs them as an array. At first, don’t worry about
repeated strings. What time complexity is your solution? */

function allAnagrams (string) {
  //set a counter i to zero
  //iterate from i to N (string length)
  //if N is odd, we switch the first element and the last element
  //if N i even we switch the i'th element and the last element
  //increment i and repeat
//   var N = string.length;
  var results = [];
  string = string.split('');

  function recurse(N, string) {
    if(N == 1) {
      var joinedString = string.join('');
      if(results.indexOf(joinedString) < 0) {
        results.push(joinedString);
      }
        return;
    }

    for (var i = 0; i < N; i+= 1) {
        recurse(N - 1, string);
        if(N % 2 === 0) {
            swap(string, i, N - 1);
        } else {
            swap(string, 0, N - 1);
        }
    }
  }

  recurse(string.length, string);
  results = results.sort();
  return results;
}

function swap(arr, idxA, idxB) {
    var tmp = arr[idxA];
    arr[idxA] = arr[idxB];
    arr[idxB] = tmp;
}
