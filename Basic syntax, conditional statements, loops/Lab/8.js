function foreignLanguage(countryName){
    let country = countryName.toLowerCase();
    if(country === "usa" || country === "england"){
        console.log("English");
    }
    else if (country === "mexico" || country === "spain" || country === "argentina"){
        console.log("Spanish");
    }
    else {
        console.log("unknown")
    }
}