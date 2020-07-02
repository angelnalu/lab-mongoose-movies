const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model.js');

const dbName = 'mongoose-lab-cinema';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name:"Tom Cruise",
    occupation: "Actor",
    catchPhrase: "That's it."
  },
  {
    name:"Leonardo de Caprio",
    occupation: "Actor",
    catchPhrase: "That's it."
  },
  {
    name:"Tom Hanks",
    occupation: "Actor",
    catchPhrase: "That's it."
  },
]

// Add here the script that will be run to actually seed the database (feel free to refer to the previous lesson)

Celebrity.create(celebrities)

  .then(celebrities =>
    console.log(`${celebrities.length} celebrities has been created`)
  )
  .catch(err => console.log ('An error has occurred when creating the celebrities: ${err}'))