const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
  });
  
  const Person = mongoose.model('Person', personSchema);

  exports.createPerson = (name, email, age) => {// => är samma som function
    var person = new Person({

       })

       return person
    }