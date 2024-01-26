/* 
Before express generator, we used to do this
var express = require("express");
var app = express()   
Now, instead of app, we want to use Router() method present in express and store it in router variable

instead of app.get() we now use router.get()

everything else remains as usual. 
*/

var express = require("express");
var router = express.Router();
const userModel = require("./users");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// Basic CRUD
// Create
router.get("/users", async function (req, res, next) {
  const users = await userModel.create({
    username: "Devang",
    age: 24,
    email: "dv080499@gmail.com",
  });
  res.send(users);
});

// reading
router.get("/allusers", async function (req, res) {
  const allUsers = await userModel.find();
  res.send(allUsers);
});

module.exports = router;
