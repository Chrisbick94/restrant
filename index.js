// Modules
require('dotenv').config()
const express = require('express')
const app = express()


// Express Settings
app.set('view engine', 'jsx')
app.set('views', __dirname + '/views')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))


// Controllers & Routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

  
// Listen For connections
app.listen(process.env.PORT)
