function vacation(peopleNumber, peopleType, day) {
    let price = 0;
    if (peopleType === 'Students') {
        if (peopleNumber >= 30) {
            if (day === 'Friday') {
                price = (peopleNumber * 8.45) * 0.85;
            }
            else if (day === 'Saturday') {
                price = (peopleNumber * 9.80) * 0.85;
            }
            else if (day === 'Sunday') {
                price = (peopleNumber * 10.46) * 0.85;
            }
        }
        else {
            if (day === 'Friday') {
                price = (peopleNumber * 8.45);
            }
            else if (day === 'Saturday') {
                price = (peopleNumber * 9.80);
            }
            else if (day === 'Sunday') {
                price = (peopleNumber * 10.46);
            }
        }
    }
    else if (peopleType === 'Business') {
        if (peopleNumber >= 100) {
            if (day === 'Friday') {
                price = ((peopleNumber - 10) * 10.90);
            }
            else if (day === 'Saturday') {
                price = ((peopleNumber - 10) * 15.60);
            }
            else if (day === 'Sunday') {
                price = ((peopleNumber - 10) * 16);
            }
        }
        else {
            if (day === 'Friday') {
                price = (peopleNumber * 10.90);
            }
            else if (day === 'Saturday') {
                price = (peopleNumber * 15.60);
            }
            else if (day === 'Sunday') {
                price = (peopleNumber * 16);
            }
        }
    }
    else if (peopleType === 'Regular') {
        if (peopleNumber >= 10 && peopleNumber <= 20) {
            if (day === 'Friday') {
                price = (peopleNumber * 15) * 0.95;
            }
            else if (day === 'Saturday') {
                price = (peopleNumber * 20) * 0.95;
            }
            else if (day === 'Sunday') {
                price = (peopleNumber * 22.50) * 0.95;
            }
        }
        else {
            if (day === 'Friday') {
                price = (peopleNumber * 15);
            }
            else if (day === 'Saturday') {
                price = (peopleNumber * 20);
            }
            else if (day === 'Sunday') {
                price = (peopleNumber * 22.50);
            }
        }
    }
    price = price.toFixed(2);
    console.log(`Total price: ${price}`);
}