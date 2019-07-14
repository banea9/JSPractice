function solve(password) {
    let errorMessages = 0;
    passwordLength(password)
    passwordCharacters(password)
    passwordDigitCheck(password)
    function passwordLength(password) {
        if (password.length < 6 || password.length > 10) {
            console.log('Password must be between 6 and 10 characters');
            errorMessages++;
        }
        else {
            return true;
        }
    };
    function passwordCharacters(password) {
        let isValid = true;
        for (let i = 0; i < password.length; i++) {
            let charAsciiPosition = password[i].charCodeAt(0)
            if ((charAsciiPosition >= 48 && charAsciiPosition <= 57) ||
                (charAsciiPosition >= 65 && charAsciiPosition <= 90) ||
                (charAsciiPosition >= 97 && charAsciiPosition <= 122)) {
                isValid = true;
            }
            else {
                isValid = false;
                console.log('Password must consist only of letters and digits');
                errorMessages++;
                break;
            }
        }
    }
    function passwordDigitCheck(password) {
        let digitCounter = 0;
        for (let i = 0; i < password.length; i++) {
            if (isNaN(Number(password[i]))) {
                continue;
            }
            else {
                digitCounter++;
            }
        }
        if (digitCounter > 1) {
            return true;
        }
        else {
            errorMessages++;
            console.log('Password must have at least 2 digits')
        }
    }
    if(errorMessages === 0) {
        console.log('Password is valid')
    }
}