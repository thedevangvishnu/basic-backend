/* 
Before express generator, we used to do this
var express = require("express");
var app = express()   
Now, instead of app, we want to use Router() method present in express and store it in router variable

instead of app.get() we now use router.get()

everything else remains as usual. 
*/

const express = require("express");
const router = express.Router();
const userModel = require("./users");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// Basic CRUD
// Create
router.get("/create", async function (req, res, next) {
  const user = await userModel.create({
    username: "Devang",
    age: 24,
    email: "dv080499@gmail.com",
  });
  res.send(user);
});

module.exports = router;
