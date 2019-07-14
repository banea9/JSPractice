function solve(num) {
    for (let i = 0; i < num; i++) {
        let char1 = String.fromCharCode(97 + i);
        for (let j = 0; j < num; j++) {
            let char2 = String.fromCharCode(97 + j);
            for (let k = 0; k < num; k++) {
                let char3 = String.fromCharCode(97 + k);
                console.log(char1 + char2 + char3);
            }
        }
    }
}