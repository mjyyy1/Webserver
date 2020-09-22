const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
  });

  personSchema.methods.speak = (params) => {

    console.log("hej");
    const presentation = this.name ? '${this.name}'
    : 'We are watching!';

    console.log(presentation);

  };
  
  const Person = mongoose.model('Person', personSchema);

  const malte = new Person({ name: 'Malte', age: 17 });
  const niklas = new Person({ name: 'Niklas', age: 17 });
  //malte.save(); /niklas.save();


  if (Person.find({name: niklas.name})  ) {

    niklas.save();

}
  

