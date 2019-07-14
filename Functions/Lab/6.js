function solve(num1,num2,num3) {
    let negativeCount = 0 
    for(let i = 0; i < arguments.length; i++) {
        if (arguments[i] < 0) {
            negativeCount++
        }
        else if (arguments[i] === 0){
            negativeCount = 0;

            break;
        }
    }
    if(negativeCount % 2 === 0) {
        console.log(`Positive`);
    }
    else {
        console.log(`Negative`)
    }
}