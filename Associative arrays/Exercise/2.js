function oddOccurences(string) {
    let map = new Map();
    let input = string.toLowerCase().split(' ');

    for (let i = 0; i < input.length; i++) {
        
        map.set(input[i], 0);
    }

    for (let word of input) {
        if (map.has(word)) {
            let existingVal = map.get(word);
            map.set(word, existingVal + 1);
        }
    }
    let arr = [];
    for(let [word, count] of map){
        
        if (count % 2 === 1){
            arr.push(word)
        }
    }
    console.log(arr.join(' '))
}