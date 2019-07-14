function solve(arr) {
    let sorted = arr.shift().split(' ').map(x => Number(x));
   
    for (let i = 0; i < arr.length; i++) {
        let [command, number, index] = arr[i].split(' ');
        number = Number(number);
        index = Number(index);
        if (command === 'Add') {
            sorted.push(number);
        }
        else if (command === 'Remove') {
            if (sorted.includes(number)) {
                sorted.splice(sorted.indexOf(number), 1)
            }
        }
        else if (command === 'RemoveAt') {    
            sorted.splice(number, 1);
        }
        else if (command === 'Insert') {
            sorted.splice(index, 0, number)
        }
       
    }
    console.log(sorted.join(' '))
    
}