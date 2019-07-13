function test (arr) {
	let days = 1;
	let totalGold = 0;
	let bitcoinsBought = 0;
	let bitcoinPrice = 11949.16;
	
	for (let i = 1; i <= arr.length; i++) {

		if (i % 3 === 0) {
			totalGold += arr[i - 1] * 67.51 * 0.7;
		}
		else {
			totalGold += arr[i - 1] * 67.51;
		}
		
		while (totalGold >= bitcoinPrice) {
			totalGold -= bitcoinPrice;
			bitcoinsBought++;
		
		}
		if(bitcoinsBought === 0) {
			days++;
		}
	}
	if(bitcoinsBought === 0) {
		days = 0;
	}
	
	console.log(`Bought bitcoins: ${bitcoinsBought}`);
	if(days > 0) {
		console.log(`Day of the first purchased bitcoin: ${days}`)
	}
	console.log(`Left money: ${totalGold.toFixed(2)} lv.`)
	
	
}
