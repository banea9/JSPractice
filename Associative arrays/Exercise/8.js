function minerTask(input) {
    let map = new Map();

    for (let i = 1; i <= input.length; i++) {
        if (i % 2 === 1) {
            if(map.has(input[i-1])){
                let existingQuantity = map.get(input[i-1]);
                map.set(input[i-1], existingQuantity + Number(input[i]))
            }
            else {
                map.set(input[i-1], Number(input[i]))
            }
            

        }
    }
    for(let [resource, quantity] of map.entries()){
        console.log(`${resource} -> ${quantity}`);
    }
}
