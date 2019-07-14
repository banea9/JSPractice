function solve(num1,num2,num3) {
    function sum (num1,num2) {
        return num1 + num2;
    }
    function subtract(num3) {
        return num3;
    }
    console.log(sum(num1, num2) - subtract(num3))
}