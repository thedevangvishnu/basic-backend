// create a admin schema and model
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/admin-db");

// admin schems
const adminSchema = mongoose.Schema({
  name: String,
  adminId: Number,
  username: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("admin", adminSchema);
