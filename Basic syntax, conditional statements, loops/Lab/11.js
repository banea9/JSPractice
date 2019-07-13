function sumOfOddNumbers(number) {
    let sum = 0;
    for (let i = 1; i <= 2 * number; i++) {
        if (i % 2 !== 0) {
            console.log(i);
            sum += i;

        }
    }
    console.log(`Sum: ${sum}`);
}