const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/webshop', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
});


exports.store = (element) => {// => är samma som function
   element.save(()=>{
     console.log("successfully saved element in database")
   })

}