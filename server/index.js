/////////////////////////////
// Imports
///////////////////////////////

// node_modules
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const massive = require("massive");
const dotenv = require("dotenv");
const session = require("express-session");

// controllers
const house_controller = require("./house_controller.js");

// middlewares
const sessionCheck = require("./middleware.js")


////////////////////////////
// Tools setup
///////////////////////////
dotenv.config();

app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);
app.use(sessionCheck)

massive(process.env.CONNECTION_STRING)
  .then(database => {
    app.set("db", database);
  })
  .catch(err => console.log(`Error connecting db: `, err));


//////////////////////////
// app routes
/////////////////////////
app
  .route(`/api/house`)
  .get(house_controller.getHouses)
  .post(house_controller.addHouse);

app.delete(`/api/house/:id`, house_controller.deleteHouse);

////////////////////////
// Server on
////////////////////////

const PORT = 4000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
