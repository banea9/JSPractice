function fuelMoney(distance, passangers, fuelPrice) {
    let moneyNeeded = 0;
    let fuelNeeded = (distance / 100) * 7;
    fuelNeeded += passangers * 0.1;
    moneyNeeded += fuelNeeded * fuelPrice
    console.log(`Needed money for that trip is ${moneyNeeded}lv.`)
}