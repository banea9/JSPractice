function companyUsers(arr) {
    let map = new Map();

    for (let row of arr) {
        let [company, userID] = row.split(' -> ');
        
        if(map.has(company)){
            if(!map.get(company).includes(userID)){
                map.get(company).push(userID);
            }
        }
        else{
            map.set(company, []);
            map.get(company).push(userID);
        }
    }
    let sorted = [...map].sort((a,b) => a[0].localeCompare(b[0]));

    for(let [company, employee] of sorted) {
        console.log(`${company}`);
        for(let user of employee){
            console.log(`-- ${user}`);
        }
    }
}