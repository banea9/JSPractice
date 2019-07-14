function solve(input){
    let obj = JSON.parse(input);
    for(let [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`)
    }
}