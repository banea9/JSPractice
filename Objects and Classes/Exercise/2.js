function townsFunc(arr) {
    let towns = [];
    let headings = arr.shift().split(' | ');

    for (let row of arr) {
        let [townName, latitude, longitude] = row.split(' | ');
        townName = townName.substr(2)
        longitude = longitude.substr(0, longitude.length - 2);
        latitude = +Number(latitude).toFixed(2);
        longitude = +Number(longitude).toFixed(2);
        addTown(townName);
        addLatitude(townName, latitude)
        addLongitude(townName, longitude);

    }
    console.log(JSON.stringify(towns));

    function addTown(townName) {
        towns.push({ Town: townName });
    }
    function addLatitude(townName, latitude) {
        let foundTown = towns.find(t => t.Town === townName);
        if (foundTown) {
            foundTown.Latitude = latitude
        }
    }
    function addLongitude(townName, longitude) {
        let foundTown = towns.find(t => t.Town === townName);
        if (foundTown) {
            foundTown.Longitude = longitude
        }
    }
}