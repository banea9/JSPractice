function sortingArray(arr){
    let newArr = [];
    let length = arr.length;
    arr.sort((a,b) => b-a);
    for(let i = 0; i < length; i++){
        if(i % 2 === 0){
            newArr.push(arr.shift())
            
        }
        else {
            newArr.push(arr.pop());
            
        }
    }
    console.log(newArr.join(' '))
}