const express = require('express')
const app = express()
const port = 3000

const ClientDir =__dirname + "\\Client\\"

app.get('/', (req, res) => res.sendFile(ClientDir + "index.html"))

app.get('/', (req, res) => {
  res.sendFile(ClientDir + "style.css")
})
app.get('/', (req, res) => {
  res.sendFile(ClientDir + "zombie.png")
})

app.get('/teknik', (req, res) => res.send('Hello World!'))

app


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
