//Require modules 
const express = require('express')

//Initialize the app variable
const app = express()

//homepage
app.get('/', function(req, res) {
    res.send('Hello World!')
})

//secondpage
app.get('/second', function(req, res){
    res.send('Second Page!')
})

//thirdpage
app.get('/third', function(req, res){
    res.send('Third Page!')
})

//Port the server will listen on
app.listen(3000)