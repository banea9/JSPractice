function solve(input) {
    let storageMap = new Map();
    for(let row of input) {
        let [product, amount] = row.split(' ');
        amount = Number(amount);
        if(storageMap.has(product)) {
            let existingAmount = storageMap.get(product) 
            existingAmount += amount;
            storageMap.set(product, existingAmount)
        }
        else {
            storageMap.set(product, amount)
        }
    }
    for(let [key, value] of storageMap.entries()){
        console.log(`${key} -> ${value}`)
    }
}