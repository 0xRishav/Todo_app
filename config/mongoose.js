//require the library
const mongoose = require('mongoose');

//connecting to db
mongoose.connect('mongodb://localhost/todoListDb', {useNewUrlParser: true});

//aquire the connection
const db = mongoose.connection;

//check for error
db.on('error',console.error.bind(console,'Eroor in connecting to database'));

//check for success
db.once('open',function(){console.log('connected to database')});
