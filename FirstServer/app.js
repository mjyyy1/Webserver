const dBModule = require('./DBModule.js')
const express = require('express')
const personModel = require('./PersonModel.js')
const app = express()
const port = 3000

const ClientDir =__dirname + "\\Client\\"

app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded())


app.get('/',(req,res) => {
  res.render('pages/index.ejs',{name:""})
})




app.use(express.static(ClientDir))

app.post('/', function (req, res) {
  let person = personModel.createPerson(req.body.name,req.body.email,req.body.age)  
  dBModule.store(person)

  let displayName = "req.body.name" + 
  res.render('pages/index.ejs',{name:displayName})
})

app.listen(port, () =>{ console.log(`Example app listening on port ${port}!`)
})