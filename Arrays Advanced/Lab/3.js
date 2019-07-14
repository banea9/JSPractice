function solve(arr) {
    let numberOfIterations = arr.shift();

    console.log(arr.slice(0, numberOfIterations).join(' '))
    console.log(arr.slice(arr.length - numberOfIterations).join(' '))
    
}