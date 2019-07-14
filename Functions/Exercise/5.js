function solve(arr) {
    for (let i = 0; i < arr.length; i++) {
        palindromeCheck(arr[i])
    }

    function palindromeCheck(number) {
        let numberToString = number.toString();
        if(numberToString === numberToString.split('').reverse().join('')) {
            console.log('true')
        }
        else {
            console.log('false')
        }
    }
}