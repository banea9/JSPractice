function solve(arr) {
    let rotations = Number(arr.pop());

    for (let i = 0; i < rotations; i++) {
        arr.unshift(arr[arr.length - 1]);
        arr.pop(arr[arr.length - 1])
    }
    console.log(arr.join(' '))
}