function solve(number) {
	for(let i = 1; i<=number; i++) {
		let currentNumber = '';
		currentNumber = (currentNumber + i.toString() + ' ').repeat(i);
		console.log(currentNumber);
	}
}