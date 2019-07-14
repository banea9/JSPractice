function solve(input) {

    let output = [];
    class Word {
        constructor(Term, Definition) {
            this.Term = Term;
            this.Definition = Definition;
        }
    }
    for (let row of input) {
        let obj = JSON.parse(row)
        for (let [key, value] of Object.entries(obj)) {
            addWord(key, value)
        }
    }
    function addWord(key, value) {
        let newWord = new Word(key, value);
        let foundWord = output.find(w => w.Term === key);
        if (!foundWord) {
            output.push(newWord)
        } else {
            foundWord.Definition = value;
        }
    }
    output.sort(function(a,b) {
        return a.Term.localeCompare(b.Term)
    });
    for (let i = 0; i < output.length; i++) {
        let outputString = ''
        for (let [term, desc] of Object.entries(output[i])) {
            if(term === 'Term') {
                outputString += `${term}: ${desc} => `;
            }
            else {
                outputString += `${term}: ${desc}`;
                console.log(outputString)
            }
        }
    }
}