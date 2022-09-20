const express = require("express");
const app = express();


app.get("/api", (req, res) => {
  res.json({"Users": ["user1", "user3", "user2"]})
})


app.listen(5000, () => {console.log("server started on port 5000")})