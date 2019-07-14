function solve(grade) {
    let output = '';
    if(grade  < 3) {
        output = 'Fail';
    } else if (grade < 3.50) {
        output = 'Poor'
    } else if (grade < 4.50) {
        output = 'Good'
    } else if (grade < 5.50) {
        output = 'Very good'
    } else if (grade < 6) {
        output = 'Excellent'
    }
    console.log(output)
}