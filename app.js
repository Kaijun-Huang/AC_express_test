const express = require("express");
const app = express();
const port = 3000;
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/profolio", (req, res) => {
  res.render("profolio");
});
app.listen(port, () => {
  console.log(`my site is running on http://localhost:${port}`);
});
