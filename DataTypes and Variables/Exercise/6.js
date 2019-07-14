function test (char1, char2, char3) {
	let result = '';
	for (let i = arguments.length - 1; i >= 0 ; i--) {
		arguments[i] = arguments[i].toString();
		result += arguments[i] + ' ';
	}
	console.log(result)
	
}