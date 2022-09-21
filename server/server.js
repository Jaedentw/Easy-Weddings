const express = require("express");
const app = express();
const database = require('./database.js');


app.get("/api", (req, res) => {
  res.json({"Users": ["user1", "user3", "user2"]})
})



app.get("/api/businesses", (req, res) => {
  const data = database.getAllBusinesses()
  .then(console.log(data))
})

app.listen(5000, () => {console.log("server started on port 5000")})