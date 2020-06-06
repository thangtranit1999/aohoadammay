var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient({useUnifiedTopology:true});
console.log("co chay");
// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://10.110.10.106/my_database_name';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection to', url);

    // do some work here with the database.

    //Close connection
    db.close();
  }
});
