const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./queries");
const port = 3000;

//allows all cors requests
var cors = require("cors");
app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//default / endpoint.
app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

//Specific endpoints that are contained within queries.js
//assigned to variable db
app.get("/users", db.getUsers);
app.get("/users/:id", db.getUserById);
app.post("/users", db.createUser);
app.put("/users/:id", db.updateUser);
app.delete("/users/:id", db.deleteUser);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
