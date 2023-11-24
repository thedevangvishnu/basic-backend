const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

// Profile routes
app.get("/profile", (req, res) => {
  res.send("Profile Page");
});

// Profile route for user named Devang
// app.get("/profile/devang", (req, res) => {
//   res.send("Devang's Profile");
// });

// profile route for all users using req param --> dynamic routing
app.get("/profile/:username", (req, res) => {
  res.send(`Hello from ${req.params.username}'s profile`);
});

app.listen(3000);
