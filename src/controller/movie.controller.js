const service = require('../service/movie.service');

const isValidMovie = (res, movie) => {
    if (!movie.id) {
        res.status(400).send('Id is mandatory')
        return false;
    }
    if (!movie.title) {
        res.status(400).send('Title is mandatory')
        return false;
    }
    return true;
}

const createMovie = (req, res) => {
    const movie = req.body;
    if (isValidMovie(res, movie)) {
        service.createMovie(movie);
        res.status(201).send('Movie created successfully');
    } else {
        res.status(400).send('Invalid data');
    }
}

const getAllMovies = (req, res) => {
    res.status(200).send(service.getMovies());
}

const getMovieById = (req, res) => {
    const id = req.params.id;
    const movie = service.getMovieById(id);
    if (movie) {
        res.status(200).send(movie);
    } else {
        res.status(404).send('Movie not found');
    }
}

const updateMovie = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    const movieToUpdate = service.getMovieById(id);
    if (isValidMovie(res, data) && movieToUpdate) {
        service.updateMovie(id, data);
        res.status(200).send('Movie updated successfully');
    } else {
        if (!movieToUpdate) {
            res.status(404).send('Movie not found');
        } else {
            res.status(400).send('Invalid data');
        }
    }
}

const deleteMovie = (req, res) => {
    const id = req.params.id;
    const movieToDelete = service.getMovieById(id);
    if (movieToDelete) {
        service.deleteMovie(id);
        res.status(204).send('Movie deleted successfully');
    } else {
        res.status(404).send('Movie not found');
    }
}

module.exports = {
    createMovie,
    getAllMovies,
    getMovieById,
    updateMovie,
    deleteMovie
};

