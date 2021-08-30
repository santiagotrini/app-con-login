// models/User.js - user model
// import packages
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// UserSchema
const UserSchema = new Schema({
  username: String,
  password: String
});
// model
const User = mongoose.model('User', UserSchema);
// export
module.exports = User;
