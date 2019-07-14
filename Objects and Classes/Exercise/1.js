function solve (arr) {
    let output = []
	class Person {
        constructor(name, personalNumber) {
            this.name = name,
            this.personalNumber = personalNumber;
        }
    }
    for(let i = 0; i < arr.length; i++) {
        let name = arr[i];
        let personalNumber = arr[i].length;
        let newPerson = new Person(name, personalNumber);
        output.push(newPerson);
    }
    for(let i = 0; i < output.length; i++) {
        console.log(`Name: ${output[i].name} -- Personal Number: ${output[i].personalNumber}`)
    }
}