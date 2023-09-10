const express = require("express");
const cors = require("cors");
const parser = require("./src/parser/");
const port = 3000;

const app = express();

app.use(cors());

app.get("/api/transactions", (req, res) => {
  res.send(parser());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
