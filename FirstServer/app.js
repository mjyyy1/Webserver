const dBModule = require('./DBModule.js')
const express = require('express')
const personModel = require('./PersonModel.js')
const app = express()
const port = 3000


app.use(express.json())
app.use(express.urlencoded())

const ClientDir =__dirname + "\\Client\\"

app.use(express.static(ClientDir))

app.post('/', function (req, res) {
  let person = personModel.createPerson(req.body.name,req.body.email,req.body.age)  
  dBModule.store(person)
})

app.listen(port, () =>{ console.log(`Example app listening on port ${port}!`)
})