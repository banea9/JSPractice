function test (yield) {
	let miningCrewSpices = 26;
	let spicesLeft = 0;
	let days = 0;
	while (yield >= 100) {
		spicesLeft += yield;
		spicesLeft -= miningCrewSpices;
		days++;
		yield -= 10;
	}
	    if(days >0){
			spicesLeft -= miningCrewSpices;

		}
	console.log(days);
	console.log(spicesLeft);
}