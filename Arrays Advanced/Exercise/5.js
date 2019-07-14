function solve(inputArr){

    inputArr.sort(sortProduct)

    function sortProduct(a,b){
        let aLength = a.length
        let bLength = b.length
        let result = aLength - bLength;

        if(result === 0){
            return a.localeCompare(b);
        }

        return result;
    }
    console.log(inputArr.join(' \n'))
}