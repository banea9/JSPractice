function amazingNumbers(number) {
    let convertedNumber = number.toString();
    let sum = 0;
    for (let i = 0; i < convertedNumber.length; i++) {
        sum += (+convertedNumber[i]);
    }
    let result = sum.toString().includes('9');
    console.log(result ? `${number} Amazing? True` : `${number} Amazing? False`);
}