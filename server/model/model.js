const mongoose = require('mongoose');
const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: String,
  status: String,
  
});
module.exports = mongoose.model('users', schema);

//'users' is a database collection 
