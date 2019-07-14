function solve(charOne, charTwo) {
    let output = '';
    let arr = [];
    let startIndex = charOne.charCodeAt(0);
    let endIndex = charTwo.charCodeAt(0);
    if (startIndex < endIndex) {
        for (let i = startIndex + 1; i < endIndex; i++) {
            output += String.fromCharCode(i) + ' ';
        }
        console.log(output)
    }
    else {
        for(let i = startIndex - 1; i > endIndex; i--){
            let char = String.fromCharCode(i);
            arr.unshift(char);
        }
        console.log(arr.join(' '))
    }
    

}