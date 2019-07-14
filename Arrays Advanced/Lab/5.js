function solve(arr) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 1) {
            output.push(arr[i] * 2);
        }
    }
    console.log(output.reverse().join(' '))
}