function coinSums (total) {
  var targetsLength = total + 1;
	var coinsLength = coins.length;
	total = [1];

	for (var i = 0; i < coinsLength; i ++) {

        var currentCoin = coins[i];

		for (var j = 1; j < targetsLength; j ++) {

			if(!total[j]) {
			    total[j] = 0;
			}

			if(j < currentCoin) {
			    total[j] += 0;

			} else {
			    var oA = currentCoin;
			    var tIndex = j - oA;
			    var num = total[tIndex];
			    total[j] += num;
			}
		}
	}

	return total[targetsLength - 1];
}
