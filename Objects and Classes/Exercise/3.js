function solve (stock, order) {
    order.map(x => stock.push(x))
    let storeProducts = {}
    
        for(let i = 0; i < stock.length; i = i + 2) {
            let productName = stock[i];
            let quantity = Number(stock[i + 1]);
            if(storeProducts.hasOwnProperty(productName)) {
                storeProducts[productName] += quantity;
            }
            else {
                storeProducts[productName] = quantity
            }
        }   
    
    for(let [key, value] of Object.entries(storeProducts)) {
        console.log(`${key} -> ${value}`)
    }
    
}