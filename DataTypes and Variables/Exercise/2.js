function test (char1, char2, char3) {
	let result = '';
	for (let i = 0; i < arguments.length; i++) {
		arguments[i] = arguments[i].toString();
		result += arguments[i]
	}
	console.log(result)
	
}