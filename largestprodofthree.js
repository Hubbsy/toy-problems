function largestProductOfThree(array) {
  array.sort(function(a, b) {
      return a - b;
    });
    //it can be either all 3 positives, or it can be two negatives
    //and one positive
  var negs = array.slice(0, 2);
  var bigPaws = array.slice(-1);
  negs.push(bigPaws);
  var negProd = negs[0] * negs[1] * negs[2];
  var threePos = array.slice(-3);
  var posProd = threePos[0]*threePos[1]*threePos[2];
  return negProd > posProd ? negProd : posProd;
}
