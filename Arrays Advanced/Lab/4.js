function solve(n, k) {
    let arr = [1];
    for (let i = 1; i < n; i++) {
        let sum = 0;
        for (let j = i - 1; j >= i - k; j--) {
            if (j < 0) {
                sum += 0;
            }
            else {
                sum += arr[j];
            }
            if (j === i - k) {
                arr.push(sum);
            }
        }
    }
    console.log(arr.join(' '))
}