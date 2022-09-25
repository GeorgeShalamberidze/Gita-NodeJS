const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})  

app.get('about', (req, res) => {
    res.redirect('https://google.com')
    res.send('Hello About')
})

app.post('/about', (req, res) => {
    res.send('Hello About post')
})

app.all('/about', (req, res) => {
    res.send("ABOUT ALL AEE")
})

app.listen(3000) 