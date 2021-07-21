const express = require("express");
const app = express();
const port = 8000;
const hbs = require("hbs");
const path = require("path");

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("", (req, res) => {
  res.render("index");
});

app.use(express.static(static_path));

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("*", (req, res) => {
  res.render("404error", {
    errorMsg: "Oops! Page Not Found, Click Here to go back",
  });
});

app.listen(port, () => {
  console.log(`Listening to the port ${port}`);
});
