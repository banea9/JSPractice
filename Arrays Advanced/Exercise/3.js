function solve (arr) {
	let names = [];
	for(let i = 0; i < arr.length; i++) {
		let commandArray = arr[i].split(' ');
		if (commandArray.length === 3) {
			if(names.includes(commandArray[0])) {
				console.log(`${commandArray[0]} is already in the list!`)
			}
			else {
				names.push(commandArray[0])
			}
		}
		else {
			if(names.includes(commandArray[0])) {
				names.splice(names.indexOf(commandArray[0]), 1)
			}
			else {
				console.log(`${commandArray[0]} is not in the list!`)
			}
		}
	}
	names.forEach(x => console.log(x))
}