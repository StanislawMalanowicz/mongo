const mongo = require('mongodb');

const client = new mongo.MongoClient
  ('mongodb://localhost:27017', {useNewUrlParser: true, useUnifiedTopology: true});

client.connect( err => {
  if (err) {
    console.log('black polaczenia', err)
  } else {
    console.log('succes');
  }
})