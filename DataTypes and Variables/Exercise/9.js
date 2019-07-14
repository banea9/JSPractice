function test (battlesLost, helmetPrice, swordPrice, shieldPrice, armorPrice) {
	let price = 0;
	let battleCounter = 0;
	let shildBreaksCounter = 0;
	for(let i = 1; i <= battlesLost; i++){
		battleCounter++;
		if(battleCounter % 6 === 0 && battleCounter % 2 === 0 && battleCounter % 3 ===0) {
			shildBreaksCounter++;
			price += swordPrice + helmetPrice + shieldPrice;
			if(shildBreaksCounter % 2 === 0) {
				price += armorPrice;
			}
		}
		else if (battleCounter % 3 === 0) {
			price += swordPrice;
		}
		else if (battleCounter % 2 === 0) {
			price += helmetPrice;
		}
	}
	console.log(`Gladiator expenses: ${price.toFixed(2)} aureus`)
}