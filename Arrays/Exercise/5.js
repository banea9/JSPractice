function solve (arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		for(let j = i + 1; j < arr.length; j++) {
			if ((arr[i] <= arr[j])) {
				break;
			}
			else {
				if(j === arr.length - 1) {
					newArr.push(arr[i])
				}
			}
		}
	}
	newArr.push(arr[arr.length - 1])
	console.log(newArr.join(' '));
}