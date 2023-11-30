var express = require("express");
var router = express.Router();
/* 
Before express generator, we used to do this
var express = require("express");
var app = express()   
Now, instead of app, we want to use Router() method present in express and store it in router variable

instead of app.get() we now use router.get()

everything else remains as usual. 
*/

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
