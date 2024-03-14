require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("Lakshyasingh20")
})

app.get('/login', (req, res) => {
    res.send('<h1>please give me an internship</h1>')
})


app.get('/lakshya', (req, res) => {
    res.send('<h1>Lakshya Kumar Singh</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})