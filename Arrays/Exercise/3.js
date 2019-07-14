function solve (arr1, arr2) {
	let newArr = [];
	let output = '';
	for(let i =0; i<arr1.length; i++) {
		if (i % 2 === 0) {
			newArr.push(Number(arr1[i]) + Number(arr2[i]))
		}
		else {
			newArr.push(arr1[i] + arr2[i])
		}
	}
	for (let i = 0; i < newArr.length; i++) {
		if(i === newArr.length - 1) {
			output += `${newArr[i]}`
		}
		else {
			output += `${newArr[i]} - `
		}
		
	}
	
	console.log(output)
}