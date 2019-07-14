function solve(arr) {
    let catalogue = {};
    for (let row of arr) {
        let [productName, productPrice] = row.split(' : ');
        productPrice = +productPrice;
        let initial = productName[0];

        if (!catalogue.hasOwnProperty(initial)) {
            catalogue[initial] = {};

        }
        let products = catalogue[initial];
        products[productName] = productPrice;
    }
    let sortedCatalog = Object.entries(catalogue).sort((a, b) => {
        return a[0].localeCompare(b[0]);
    })
    for (let [initial, products] of sortedCatalog) {
        let sortedProducts = Object.entries(products).sort((a, b) => {
            return a[0].localeCompare(b[0])
        })
        console.log(initial)
        for (let [name, price] of sortedProducts) {
            console.log(`  ${name}: ${price}`);
        }
    }
}