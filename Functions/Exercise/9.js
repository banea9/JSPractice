function solve(number) {
    let loadingArr = []
    for (let i = 10; i <= number; i = i + 10) {
        loadingArr.push('%');
    }
    while(loadingArr.length !== 10) {
        loadingArr.push('.')
    }
    if (number === 100) {
        console.log(`100% Complete!`)
        console.log(`[${loadingArr.join('')}]`)
    }
    else {
        console.log(`${number}% [${loadingArr.join('')}]`)
        console.log('Still loading...')
    }
}
