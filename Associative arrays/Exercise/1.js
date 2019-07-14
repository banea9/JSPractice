function wordTracker(arr) {
    let map = new Map();
    let neededWords = arr.shift().split(' ');
    for (let i=0; i < neededWords.length; i++){
        map.set(neededWords[i], 0);
    }
    for(let word of arr){
        if(map.has(word)){
            let existingVal = map.get(word);
            let newVal = existingVal + 1;
            map.set(word, newVal);
        }
    }
    let sorted = [...map.entries()].sort((a,b) => b[1] - a[1]);

    for(let [word, count] of sorted){
        console.log(`${word} - ${count}`)
    }
}