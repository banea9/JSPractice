function solve(num1, num2) {
	let output = '';
	let sum = 0;
	for (let i = num1; i <= num2; i++) {
		output = output + ' ' + i.toString();
		sum += i;
	}
	console.log(output);
	console.log(`Sum: ${sum}`)
}