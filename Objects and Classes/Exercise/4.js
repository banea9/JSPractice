function solve(input){
    let movie = []
    for(let row of input){
        if (row.includes('addMovie')){
            let tokens = row.split('addMovie ');
            let movieName = tokens[1];
            addMovie(movieName);
        }
        else if (row.includes('directedBy')){
            let tokens = row.split(' directedBy ');
            let movieName = tokens[0];
            let directorName = tokens[1];
            addDirector(movieName, directorName);
        }
        else {
            let [movieName, movieDate] = row.split(' onDate ');
            addDate(movieName, movieDate);
        }
    }
    for(let i = 0; i < movie.length; i++) {
        if(movie[i].name && movie[i].date && movie[i].director) {
            console.log(JSON.stringify(movie[i]))
        }
    }

  
    function addMovie(movieName){
        movie.push({name: movieName});
    }

    function addDirector(movieName, directorName){
        let foundMovie = movie.find(m => m.name === movieName);
        if(foundMovie) {
            foundMovie.director = directorName;
        }
    }

    function addDate(movieName, movieDate){
        let foundMovie = movie.find(m => m.name === movieName);
        if(foundMovie) {
            foundMovie.date = movieDate;
        }
    }
}