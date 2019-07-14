function primeNumber(num) {
    let counter = 0;
    for (let i = 2; i < num; i++) {
        if(num === 1 || num === 2){
            break;
        }
        else if(num % i === 0){
            counter++;
        }
    }
    if(num === 1 || num === 2){
        console.log('true');
    }
    else { 
        console.log(counter > 0 ? 'false' : 'true');
    }

}