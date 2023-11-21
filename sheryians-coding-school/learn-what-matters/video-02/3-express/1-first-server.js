// Learn to use express and create your first server

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("This is Home route");
});

app.get("/profile", function (req, res) {
  res.send("This is Profile route");
});

app.get("/contact", function (req, res) {
  res.send("This is Contact route");
});

app.listen(3000);
