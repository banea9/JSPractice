function theatre(dayType, age) {
    let day = dayType.toLowerCase();
    if (age >= 0 && age <= 18) {
        switch (day) {
            case 'weekday':
                console.log('12$');
                break;
            case 'weekend':
                console.log('15$');
                break;
            case 'holiday':
                console.log('5$');
                break;
        }
    }
    else if (age >= 19 && age <= 64) {
        switch (day) {
            case 'weekday':
                console.log('18$');
                break;
            case 'weekend':
                console.log('20$');
                break;
            case 'holiday':
                console.log('12$');
                break;
        }
    }
    else if (age >= 65 && age <= 122) {
        switch (day) {
            case 'weekday':
                console.log('12$');
                break;
            case 'weekend':
                console.log('15$');
                break;
            case 'holiday':
                console.log('10$');
                break;
        }
    }
    else if (age < 1 || age > 122) {
        console.log('Error!')
    }
}