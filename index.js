const express = require("express");
const app = express();
const dbConfig = require("./config/database.config");
const mongoose = require("mongoose");
// Require Notes routes
require("./app/routes/user.routes.js")(app);

mongoose.Promise = global.Promise;

//Connecting to Database
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successfully Connected To DATABASE");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ "Welcome to slot booking": "Hello" });
});
//listen for request
app.listen(5000, () => {
  console.log("Backend Server is Running..");
});
