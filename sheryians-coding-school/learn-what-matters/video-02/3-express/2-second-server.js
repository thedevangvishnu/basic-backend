// Practice creating more server and also implement middleware

const express = require("express");
const app = express();

app.use(function (req, res, next) {
  console.log("middleware1 ran");
  next();
});

app.use((req, res, next) => {
  console.log("middleware2 ran");
  next();
});

// Create a home route
app.get("/", function (req, res) {
  res.send("Home Page");
});

// Profile route
app.get("/profile", (req, res) => {
  res.send("Profile Page");
});

// Products ruoute
app.get("/products", (req, res) => {
  res.send("Products Page");
});

app.listen(3010);
