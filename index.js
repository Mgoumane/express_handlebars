const express = require("express");
const { engine } = require('express-handlebars');

const app = express();
app.engine('handlebars', engine({ extname: '.handlebars', defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home",{
    title: 'Ma homepage'
  });
});
app.get("/login", (req, res) => {
  res.render("login");
});

app.use(express.urlencoded({ extended: true }))
app.post("/login/register", (req, res) => {
  res.send("Donnée envoyée");
});



app.listen(8000, () => {
  console.log("Serveur lancé");
});