"use strict";

var express = require("express");

var app = express();
var port = 3000;

var bodyParser = require('body-parser');

var user = {
  name: "Pikachu",
  email: "pikachu@gmail.com",
  mdp: "1234",
  isAdmin: false
};
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express["static"]("public")); // affiche la view liste produit SF

app.get('/listproduitsbabel', function (req, res) {
  res.render('listproduitsbabel');
});
app.get('/detail', function (req, res) {
  res.render('detail');
});
app.get('/index', function (req, res) {
  res.render('index', {
    admin: user.isAdmin
  });
}); // affiche la view page index 

app.get('/', function (req, res) {
  res.render('index', {
    admin: user.isAdmin
  });
});
app.post('/', function (req, res) {
  var user = {
    name: "Pikachu",
    email: "pikachu@gmail.com",
    mdp: "1234",
    isAdmin: false
  };

  if (user.email != req.body.email || user.mdp != req.body.pass) {
    user.isAdmin = false;
  } else {
    user.isAdmin = true;
  }

  res.render('index', {
    admin: user.isAdmin
  });
});
app.listen(port);