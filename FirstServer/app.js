const express = require('express')
const app = express()
const port = 3000




const ClientDir =__dirname + "\\Client\\"

app.get('/', (req, res) => res.sendFile(ClientDir + "index.html"))

app.get('/MainStyle', (req, res) => {
  res.sendFile(ClientDir + "style.css")
})
app.get('/h', (req, res) => {
  res.sendFile(ClientDir + "zombie.png")
})

app.post('/', function (req, res) {
  res.send('POST request to the homepage')
  console.log()
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
