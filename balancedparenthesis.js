function isBalanced (string) {
    var counter = 0;
  for(var i = 0; i < string.length; i++) {
    if(string[i] === '(') {
        counter++;
    } else if (string[i] === ')') {
        counter--;
        if(counter=== -1) {
            return false;
        }
    }
  }

  return (counter === 0);
}
