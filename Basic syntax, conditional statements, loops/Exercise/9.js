function solve(arr) {
	let counter = 0;
	let username = arr.shift();
	for(let i = 0; i < arr.length; i++) {
		let password = arr[i].split('').reverse().join('');
		counter++;
		if(username !== password) {
			if(counter < 4){
				console.log('Incorrect password. Try again.')
			}
			else {
				console.log(`User ${username} blocked!`)
			}
		}
		else {
			console.log(`User ${username} logged in.`)
		}	
		
	}
}