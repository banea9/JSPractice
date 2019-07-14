function arrayManipulator(arr, commands) {
    for (let currentCommand of commands) {
        let token = currentCommand.split(' ');
        let command = token[0];

        if (command === "add") {
            let index = Number(token[1]);
            let number = Number(token[2]);
            arr.splice(index, 0, number);
        }
        else if (command === "addMany") {
            let index = Number(token[1]);
            let elements = token.slice(2).map(Number);
            arr.splice(index, 0, ...elements);
        }
        else if (command === "contains") {
            console.log(arr.indexOf(Number(token[1])));
        }
        else if (command === "remove") {
            let index = Number(token[1]);
            arr.splice(index, 1)
        }
        else if (command === "shift") {
            let positions = Number(token[1]);
            positions %= arr.length;

            let firstPart = arr.slice(0, positions);
            let secondPart = arr.slice(positions);

            arr = secondPart.concat(firstPart);
        } else if (command === "sumPairs") {
            let merged = []
            for (let i = 0; i < arr.length - 1; i+= 2) {
                merged.push(arr[i] + arr[i + 1]);
            }
            if(arr.length % 2 === 1){
                merged.push(arr.pop());
            }
            arr = [...merged];
        }
        else {
            console.log(arr)
        }
    }
}