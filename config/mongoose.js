const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://snglakshat:Akshat123@cluster0.5ujyyht.mongodb.net/TalkNet");
const db= mongoose.connection;

db.on('error',console.error.bind(console,"Error connectiing to MongoDB"));

db.once('open',function(){
  console.log('Connected to database: MongoDB');

});
module.exports= db;
