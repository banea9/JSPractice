function solve (arr) {
	class Cat {
	constructor (name, age) {
		this.name = name;
		this.age = age;
	}
	meow() {
		console.log(`${this.name}, age ${this.age} says Meow`)
	}
}

	for(let index of arr) {
		let [cname, cage] = index.split(' ');
		let cat = new Cat(cname, cage);
		cat.meow()
	} 	
}
