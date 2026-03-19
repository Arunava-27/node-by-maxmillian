const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const homeRoutes = require("./routes/home")
const userRoutes = require("./routes/users")


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(homeRoutes);
app.use(userRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(5000);