const express = require('express')
const router = require('./route/movie.route')

const app = express()
app.use(express.json())
app.use((req, res, next) => {
    const token = req.headers['x-api-key']
    if (token === 'Un1v4$.2022') {
        next()
    } else {
        res.status(401).send('Invalid token')
    }
})
app.use('/api/movies', router)

app.listen(3001, () => {
    console.log('Server started on port 3001')
});