 function equalElements(arr) {
    arr = arr[0].split(' '); // razbivame stringa v array
    let longestSequence = [];

    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];
        let currentSequence = [currentElement];
        for (let j = i + 1; j < arr.length; j++) {
            let nextElement = arr[j];
            if (nextElement === currentElement) {
                currentSequence.push(nextElement);
            }
            else {
                break;
            }
        }
        if (currentSequence.length > longestSequence.length) {

            longestSequence = [];
            for (let j = 0; j < currentSequence.length; j++) {
                longestSequence.push(currentSequence[j]);
            }
        }
    }
    console.log(longestSequence.join(' '));
}