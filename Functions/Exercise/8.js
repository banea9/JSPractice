function solve(number) {
    let sum = 0;
    let properDivisors = []
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            properDivisors.push(i);
        }
    }
    for (let i = 0; i < properDivisors.length; i++) {
        sum += properDivisors[i];
    }
    if (sum === number) {
        console.log('We have a perfect number!')
    }
    else {
        console.log('It\'s not so perfect.');
    }
}