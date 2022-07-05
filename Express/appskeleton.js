const express = require("express");
const csrf = require("csurf");
const cookieParser = require("cookie-parser");

const app = express();
const csrfProtection = csrf({ cookie: true });
const bodyparser = require("body-parser");
const asyncHandler = (handler) => (req, res, next) =>
  handler(req, res, next).catch(next);

//import models
const { Person, HairColor } = require("./models");

//use cookie parser middleware
app.use(cookieParser());
app.use(bodyparser.urlencoded({ extended: false }));

app.get(
  "route here",
  asyncHandler(async (req, res) => {
    //get data from database
    const model = await Person.findAll({
      //include another model if you want
      include: { model: modelname },
    });
    //render the home.pug file with the model object
    res.render("home", {
      model,
    });
  })
);

//get a route with csurf protection
app.get(
  "routehere",
  csrfProtection,
  asyncHandler(async (req, res) => {
    const person = await Person.findAll();
    const hairC = await HairColor.findAll();
    //render pug page with database stuff and csurf, etc...
    res.render("new-person", {
      person,
      hairC,
      errors: [],
      csrfToken: req.csrfToken(),
    });
  })
);

//post route
app.post(
  "routehere",
  csrfProtection,
  asyncHandler(async (req, res) => {
    //Pull fields from the form
    const { firstName, lastName, age, biography, hairColorId } = req.body;
    //create new database entry
    const newPerson = await Person.create({
      firstName,
      lastName,
      age,
      biography,
      hairColorId,
    });
    //redirect to main
    res.redirect("/");
  })
);

app.set("view engine", "pug");
const port = 8081;
app.listen(port, () => console.log(`Listening on port ${port}...`));

try {
  exports.app = app;
} catch (e) {
  exports.app = null;
}
