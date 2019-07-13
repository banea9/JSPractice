function test(num1, num2, num3) {
	let arr = [];
	for(let i = 0; i < arguments.length; i++) {
		arr.push(arguments[i])
	}
	arr.sort((a,b) => {return b-a});
	for(let i = 0; i < arr.length; i++) {
		console.log(arr[i])
	}
}