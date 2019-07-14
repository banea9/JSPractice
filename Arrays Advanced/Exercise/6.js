function sortingArray(arr, bombArr){
	let bombNumber = bombArr[0];
	let bombPower = bombArr[1];
	
	
	let sum = 0; 
	for (let i = 0; i < arr.length; i++) {
		if(arr[i] === bombNumber) {
            let start = Math.max(0, i - bombPower);
            arr.splice(start, bombPower*2 + 1);
            i = start - 1;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
	console.log(sum)
}
