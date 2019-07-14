function gladiatorInventory(arr) {
    let inventory = arr.shift().split(' ');

    for (let i = 0; i < arr.length; i++) {

        let tokens = arr[i].split(' ');
        let command = tokens[0];

        if (command === 'Buy') {
            let item = tokens[1];
            let index = inventory.indexOf(item);
            if (index === -1) {
                inventory.push(item);
            }

        }
        else if (command === 'Trash') {
            let item = tokens[1];
            let index = inventory.indexOf(item);
            if (index !== -1) {
                inventory.splice(index, 1);
            }


        }
        else if (command === "Repair") {
            let item = tokens[1];
            let index = inventory.indexOf(item);
            if (index !== -1) {
                inventory.splice(index, 1);
                inventory.push(item)
            }

        }
        else {
            let equipment = tokens[1].split('-')
            let index = inventory.indexOf(equipment[0]);
            if (index !== -1) {
                inventory.splice(index + 1, 0, equipment.join(':'))
            }
        }
    }
    console.log(inventory.join(' '));

}