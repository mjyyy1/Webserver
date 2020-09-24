const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});

const personSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const Person = mongoose.model('Person', personSchema);


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

  //save to database here
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
