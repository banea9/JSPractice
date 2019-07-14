function solve(name,area,population,country,postCode){
    let obj = {
        name,
        area,
        population,
        country,
        postCode
    }
    let entries = Object.entries(obj)
    for (let [key, value] of entries) {
        console.log(`${key} -> ${value}`)
    }
}