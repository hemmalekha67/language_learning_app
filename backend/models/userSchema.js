const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  username: String,
  email: String,
  password: String
});

const User = mongoose.model("User", userSchema);
module.exports = User;
