const express = require('express')
const app = express()
const port = 3000

const ClientDir =__dirname + "\\Client"

app.get('/', (req, res) => res.sendfile(ClientDir + "\\index.html"))
app.get('/teknik', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))