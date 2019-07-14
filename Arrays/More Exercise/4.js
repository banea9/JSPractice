function solve(arr) {
    let currentLargest = -1000000000; 
    let output = []
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > currentLargest) {
            currentLargest = arr[i]
            output.push(currentLargest);
        }
    }
    console.log(output.join(' '))
}