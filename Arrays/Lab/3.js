function solve (number, arr) {
	let newArr = [];
	for (let i = number - 1; i >= 0; i--) {
		newArr.push(arr[i])
	}
	let output = '';
	for (let i = 0; i < newArr.length; i++) {
		output += newArr[i] + ' ';
	}
	
	console.log(output)
}