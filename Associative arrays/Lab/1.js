function solve(input) {
    let phones = [];
    for (let i = 0; i < input.length; i++) {
        let [name, phoneNumber] = input[i].split(' ');
        phones[name] = phoneNumber;
    }
    for(let key in phones) {
        console.log(`${key} -> ${phones[key]}`)
    }

}