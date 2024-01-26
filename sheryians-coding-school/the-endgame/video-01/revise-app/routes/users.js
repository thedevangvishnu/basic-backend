// practice setting up mongodb and mongoose and configure

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/practice-db");

// create a schema
const userSchema = mongoose.Schema({
  username: String,
  email: String,
  age: Number,
});

module.exports = mongoose.model("users", userSchema);
