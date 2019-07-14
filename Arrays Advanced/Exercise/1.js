function solve(arr) {
    let wagons = arr.shift().split(' ').map(x => Number(x));
    let capacityOfWagon = Number(arr.shift());
    for(let i = 0; i < arr.length; i++) {
        if (arr[i].length > 2) {
            let [command, passangers] = arr[i].split(' ');
            passangers = Number(passangers);
            wagons.push(passangers);
        }
        else {
            for(let j = 0; j < wagons.length; j++) {
                if (capacityOfWagon >= wagons[j] + Number(arr[i])) {
                    wagons[j] = wagons[j] + Number(arr[i])
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '))
}