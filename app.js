const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static('public'));

app.get("/", function(req, res){
  res.render("home");
});

app.get("/knot", function(req, res){
  res.render("knot");
});


app.listen(3000, function(){
  console.log("Server started on port 3000");
});
