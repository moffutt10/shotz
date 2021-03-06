// Load movie promise for movie.json
const loadMovies = () => {
    return new Promise((resolve, reject) => {
        $.get('../db/movie.json')
            .done((data) => {
                resolve(data.movies);
            })
            .fail((error) => {
                reject(error);
            })
    });
}

// Second movie promise for movie.json, but specific to movie locations
const moviesLocationsArray = (movieId) => {
    let movieLocations = '';
    return new Promise((resolve, reject) => {
        $.get('../db/movie.json')
        .done((data) => {
            let moviesData = data.movies;
            for (let i=0; i<moviesData.length; i++) {
                if(moviesData[i].id == movieId) {
                    movieLocations = moviesData[i].locations;
                } 
            }     
            resolve(movieLocations);
        }).fail((error => {
            reject(error);
        }))
    })
}

export { loadMovies, moviesLocationsArray }