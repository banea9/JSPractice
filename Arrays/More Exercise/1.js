function solve (arr) {
    let step = Number(arr.pop());
    let output = '';
    for(let i = 0; i < arr.length; i = i + step){
        output += arr[i] + ' ';
    }
    console.log(output)
}
