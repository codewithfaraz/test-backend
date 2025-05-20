const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
///
app.get("/", (req, res) => {
  return res.send("hello world");
});
app.get("/home", (req, res) => {
  return res.send("hello world from home");
});
app.listen(3000, () => {
  console.log("server is listening...");
});
