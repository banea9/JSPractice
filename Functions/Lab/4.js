function solve(product, amount) {
    let output = 0;
    if (product === 'coffee') {
        output = amount * 1.5;
    } else if (product === 'water') {
        output = amount * 1;
    } else if (product === 'coke') {
        output = amount * 1.4;
    } else if (product === 'snacks') {
        output = amount * 2;
    }
    console.log(`${output.toFixed(2)}`)
}