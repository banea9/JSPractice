function equalSums(arr) {

    let leftsum = 0;
    let rightsum = 0;
    let areEqual = true;
    if (arr.length === 1) {
        console.log('0');
        return
    }
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            leftsum = 0;
        }
        else {
            leftsum += arr[i - 1];
        }
        for (let j = i + 1; j < arr.length; j++) {
            rightsum += arr[j];
        }
        if (leftsum === rightsum) {
            console.log(i)
            break;
        }
        else {
            rightsum = 0;
            if (i === arr.length - 1) {
                console.log('no');
            }
        }
    }
}