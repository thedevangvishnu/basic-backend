// setup mongodb and mongoose
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/generator-app-db");

// create schema and model
const userSchema = mongoose.Schema({
  username: String,
  password: String,
  name: String,
  age: Number,
});

mongoose.model("users", userSchema);
