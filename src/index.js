module.exports = function makeExchange(currency) {

	const arr = [50,25,10,5,1];

	let coins = {
		cns: ['H','Q','D','N','P','error']
	}

	let excangeCoins = new Object();

	let i = 0;
	let coinsCount = 0;

	if ( (currency == 0) || ( currency > 10000 ) || (currency < 0) ) {
		if ((currency == 0) || (currency < 0)) {
			return excangeCoins;
		} else if ( currency > 10000 ) {
			excangeCoins[coins.cns[5]]="You are rich, my friend! We don't have so much coins for exchange";
		};
	} else {
		while ( (currency > 0) && (currency != 0) ){
			if ( ((currency - arr[i]) < 0) && (arr[i] > currency)) {
				i++;
			} else {
				currency -= arr[i];
				coinsCount += 1;
				if (arr[i] > currency) { 
					excangeCoins[coins.cns[i]] = coinsCount;
					i++;
					coinsCount = 0;
                };
			};
		};
	};
	return excangeCoins;
};
