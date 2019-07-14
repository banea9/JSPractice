function solve (arr) {
	let arrSum = 0;
	for(let i = 0; i < arr.length; i++) {
		arrSum += arr[i]
	};
	for (let i = 0; i < arr.length; i++) {
		if(arr[i] % 2 === 0) {
			arr[i] = arr[i] + i;
		}
		else {
			arr[i] = arr[i] - i;
		}
	}
	
	let newArrSum = 0;
	for(let i = 0; i < arr.length; i++) {
		newArrSum += arr[i]
	};
	console.log(arr);
	console.log(arrSum)
	console.log(newArrSum)
}