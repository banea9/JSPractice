function solve (arr) {
	class Song {
		constructor(typeList, name, time) {
			this.typeList = typeList;
			this.name = name;
			this.time = time;
		}
	}
	let songs = arr.shift();
	let typeOfSong = arr.pop();
	let output = [];
	if(typeOfSong === 'all') {
		for(let i = 0; i < arr.length; i++) {
			let [sType, sName, sTime] = arr[i].split('_');
			let newSong = new Song(sType, sName, sTime);
			output.push(newSong.name);
		}
	}
	else {
		for(let i = 0; i < arr.length; i++) {
			let [sType, sName, sTime] = arr[i].split('_');
			let newSong = new Song(sType, sName, sTime);
			if (typeOfSong === sType) {
				output.push(newSong.name);
			}
		}
	}
	output.forEach(x => console.log(x))

}