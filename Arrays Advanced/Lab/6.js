function solve(arr) {
    let sorted = arr.sort((a,b) => a - b)
    console.log(sorted.slice(0,2).join(' '))
}