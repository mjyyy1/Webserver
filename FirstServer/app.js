const dBModule = require('./DBModule.js')
const express = require('express')
const app = express()
const port = 3000


app.use(express.json())
app.use(express.urlencoded())

const ClientDir =__dirname + "\\Client\\"

app.get('/', (req, res) => res.sendFile(ClientDir + "index.html"))

app.get('/MainStyle', (req, res) => {
  res.sendFile(ClientDir + "style.css")
})
app.get('/h', (req, res) => {
  res.sendFile(ClientDir + "zombie.png")
})

app.post('/', function (req, res) {
  dBModule.storePerson(req.body.name,req.body.email,req.body.age)
})

app.listen(port, () =>{ console.log(`Example app listening on port ${port}!`)
})