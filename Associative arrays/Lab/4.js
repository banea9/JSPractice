function solve (arr) {
	let wordMap = new Map();
	
	for (let word of arr) {
		if(wordMap.has(word)) {
			let wordCount = wordMap.get(word);
			wordCount++;
			wordMap.set(word, wordCount)
		}	
		else {
			wordMap.set(word, 1)
		}
	}
	
	let sorted = [...wordMap.entries()].sort((a,b) => b[1] - a[1])
	for (let [key, value] of sorted) {
		console.log(`${key} -> ${value} times`)
	}
}