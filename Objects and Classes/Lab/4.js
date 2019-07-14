function solve (name, lastName, hairColor) {
	let obj = {
		name,
		lastName,
		hairColor
	}
	
	let toJson = JSON.stringify(obj);
	console.log(toJson)
}
