function solve(num1,num2) {
    let firstNumFactorial = num1;
    let secondNumFactorial = num2;
    for(let i = num1-1; i > 0; i--) {
        if(num1 === 0) {
            firstNumFactorial = 1;
            break;
        }
        firstNumFactorial *= i;
    }
    for(let i = num2-1; i > 0; i--) {
        if(num2 === 0) {
            secondNumFactorial = 1;
            break;
        }
        secondNumFactorial *= i;
    }
    let output = firstNumFactorial / secondNumFactorial;
    console.log(`${output.toFixed(2)}`)
}
