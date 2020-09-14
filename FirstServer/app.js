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
  console.log(req.body.name)
  console.log(req.body.email)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
