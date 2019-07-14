function solve (arr1, arr2) {
	let sum = 0;
	arr1 = arr1.map((x) => Number(x));
	arr2 = arr2.map((x) => Number(x));
	
	for (let i = 0; i < arr1.length; i++) {
		if (!(arr1[i] === arr2[i])) {
			console.log(`Arrays are not identical. Found difference at ${i} index`)
			break;
		}
		else {
			sum += arr1[i]
			if (i === arr1.length - 1) {
				console.log (`Arrays are identical. Sum: ${sum}`)
			}
		}
	} 
	
	
}