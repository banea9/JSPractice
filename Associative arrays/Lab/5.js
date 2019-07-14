function solve(arr) {
    let map = new Map();
    let addresses = arr.shift().split(', ');
 
    for (let address of addresses) {
        map.set(address, [])
    }
 
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i].split(' - ');
        let address = current[0];
        let person = current[1];
        if (addresses.includes(address)) {
            map.get(address).push(person);
        }
    }
 
    let sorted = [...map].sort((a, b) => b[1].length - a[1].length)
   
    for (let address of sorted) {
        let peoples = address[1].length > 0
            ? address[1].length
            : 0;
        console.log(`${address[0]}: ${peoples}`)
        if (address[1].length > 0) {
            for (let person of address[1]) {
                console.log(`--${person}`)
            }
        }
    }
}
