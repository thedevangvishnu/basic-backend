// Practice using another package and use it

var figlet = require("figlet");

figlet("NodeJS", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
