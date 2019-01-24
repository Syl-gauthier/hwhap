const express = require("express");

const app = express();
const morgan = require("morgan");


const port = process.env.PORT||3000;

app.use(morgan("tiny"));

app.set("view engine", "pug");

app.get("/", function(req, res){
  res.render("index");
});

app.listen(port, function() {
  console.log("\x1b[32m", "app listening on port", port, "\x1b[0m");
});
