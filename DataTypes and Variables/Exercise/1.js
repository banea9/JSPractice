function test (number) {
	let stringNumber = number.toString();
	let sum = 0;
	for(let i = 0; i < stringNumber.length; i++) {
		sum += +stringNumber[i];
	}
	console.log(sum)
}