function solve(arr) {
	let parkingArr = [];
	for(let i = 0; i < arr.length; i++) {
		let [command, carNumber] = arr[i].split(', ');
		if(command === 'IN') {
			parkingArr.push(carNumber);
		}
		else if (command === 'OUT') {
			parkingArr.splice(parkingArr.indexOf(carNumber), 1);
		}
	}
	parkingArr.sort((a,b) => a.localeCompare(b));
	if(parkingArr.length === 0) {
		console.log(`Parking Lot is Empty`)
	}
	else {
		parkingArr.forEach(x => console.log(x));
	}
	
}
solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']

)