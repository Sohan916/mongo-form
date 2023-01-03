const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/smoketree");

const User = mongoose.model("User", {
  name: {
    type: String,

    trim: true,
  },
  address: {
    type: String,
  },
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  let newUser = new User({
    name: req.body.name,
    address: req.body.address,
  });
  newUser.save();
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("running");
});
