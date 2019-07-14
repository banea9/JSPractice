function solve(number) {
    let sum = 0;
    let averageValue = 0;
    let numToString = number.toString();
    for (let i = 0; i < numToString.length; i++) {
        sum += +(numToString[i]);
        if (i === numToString.length - 1) {
            if (sum / numToString.length >= 5) {
                console.log(numToString);
            }
            else {
                numToString = numToString + '9';
            }
        }
    }

}