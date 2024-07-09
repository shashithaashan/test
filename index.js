const express = require("express");
const app = express();
require("dotenv").config();
app.get("/", (req, res) => {
  res.send("Runing the server");
});

const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => {
  console.log("server run on port 3000");
});
