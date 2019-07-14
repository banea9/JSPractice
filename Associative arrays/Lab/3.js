function solve(arr) {
	let gradesMap = new Map();
	for (let row of arr) {
		let tokens = row.split(' ');
        let name = tokens[0];
        let grades = tokens.splice(1, tokens.length).map(Number);
		if(gradesMap.has(name)) {
            let getExistingGrades = gradesMap.get(name);
            grades.forEach(x => getExistingGrades.push(x))
		}
		else {
			gradesMap.set(name, grades)
		}
	}
	let sorted = [...gradesMap.entries()].sort(getAverageGrade)
	
	function getAverageGrade(firstArr, secondArr) {
		let firstGrade = 0;
		let secondGrade = 0;
		firstArr[1].forEach(n => firstGrade += n)
		secondArr[1].forEach(n => secondGrade += n)
		let avgFirst = firstGrade / firstArr[1].length
		let avgSecond = secondGrade / secondArr[1].length
		return avgFirst - avgSecond
		
	}
	for (let arr of sorted) {
		console.log(`${arr[0]}: ${arr[1].join(', ')}`)
	}
}