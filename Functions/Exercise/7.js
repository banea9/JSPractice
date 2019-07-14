function findLongestShortestWord(sentence) {
    let arr = sentence.split(/[.?\s!,]+/g);
    let longestWord = longestWordFinder(arr);
    let shortest = shortestWordFinder(arr);
    
    console.log(`Longest -> ${longestWord}`)
    console.log(`Shortest -> ${shortest}`)
    
    function longestWordFinder(arr) {
        let longest = '';
        let wordIndex = 0;
        for (let i = 0; i < arr.length; i++) {
            let currentWord = arr[i];
            let currentWordIndex = i;
            if (currentWord.length > longest.length) {

                longest = currentWord;
            }
        }
        return longest;
    }

    function shortestWordFinder(arr) {
        let shortest = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
        let wordIndex = 0;
        for (let i = 0; i < arr.length; i++) {
            let currentWord = arr[i];
            let currentWordIndex = i;
            if (currentWord.length < shortest.length) {

                shortest = currentWord;
            }
        }
        return shortest;
    }
}