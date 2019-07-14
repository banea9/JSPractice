function solve(arr) {
    let outputArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(!(outputArr.includes(arr[i]))) {
            outputArr.push(arr[i])
        }
    }
    console.log(outputArr.join(' '))
}