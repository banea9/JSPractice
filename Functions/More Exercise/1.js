function solve(arr){
    let percentClean = 0;
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === 'soap') {
            percentClean += 10;
        }
        else if (arr[i] === 'water') {
            percentClean = percentClean * 1.2;
        }
        else if (arr[i] === 'vacuum cleaner') {
            percentClean = percentClean * 1.25;
        }
        else {
            percentClean = percentClean * 0.9;
        }
    }
    console.log(`The car is ${percentClean.toFixed(2)}% clean.`)
}
