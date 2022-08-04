const express = require("express");
const { engine } = require('express-handlebars');

const app = express();
app.engine('handlebars', engine({ extname: '.handlebars', defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(8000, () => {
  console.log("Serveur lancé");
});