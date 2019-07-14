function solve(firstName, lastName, age){
    let obj = {
        firstName,
        lastName,
        age
    }
    let entries = Object.entries(obj)
    for (let kvp of entries) {
        console.log(`${kvp[0]}: ${kvp[1]}`)
    }
}