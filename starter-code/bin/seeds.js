const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model.js');

const dbName = 'mongoose-lab-cinema';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name:"Tom Cruise",
    Occupation: "Actor",
    catchPhrase: "That's it."
  },
  {
    name:"Leonardo de Caprio",
    Occupation: "Actor",
    catchPhrase: "That's it."
  },
  {
    name:"Tom Hanks",
    Occupation: "Actor",
    catchPhrase: "That's it."
  },
]

// Add here the script that will be run to actually seed the database (feel free to refer to the previous lesson)

Celebrity.create(celebrities)

  .then(celebrities =>
    console.log(`${celebrities.length} celebrities has been created`)
  )
  .catch(err => console.log ('An error has occurred when creating the celebrities: ${err}'))
