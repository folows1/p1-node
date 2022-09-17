const myDatabase = []

const createMovie = (movie) => {
    myDatabase.push(movie)
}

const getMovies = () => myDatabase;

const getMovieById = (id) => myDatabase.find((movie) => movie.id == id);

const updateMovie = (id, movie) => {
    const index = myDatabase.findIndex((movie) => movie.id == id);
    myDatabase[index] = movie;
}

const deleteMovie = (id) => {
    const index = myDatabase.findIndex((movie) => movie.id == id);
    myDatabase.splice(index, 1);
}

module.exports = {
    createMovie,
    getMovies,
    getMovieById,
    updateMovie,
    deleteMovie
};