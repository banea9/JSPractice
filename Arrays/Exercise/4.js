function solve (arr, rotations) {
	for (let i = 0; i < rotations; i++) {
		arr.push(arr[0]);	
		arr.shift(arr[0]);
	}
	console.log(arr.join(' '))
}