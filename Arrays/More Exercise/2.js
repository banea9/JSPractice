function solve (arr) {
    let commandCounter = 0;
    let output = [];
    for(let i = 0; i < arr.length; i++) {
        commandCounter++;
        if(arr[i] === 'add') {
            output.push(commandCounter)
        }
        else {
            output.pop(arr[i - 1])
        }
    }
    if (output.length === 0) {
        console.log('Empty')
    }
    else {
        console.log(output.join(' '))
    }
}
