const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");

const port = 4000;

const app = express();
app.use(bodyParser.json());

let posts = {};

app.get("/", (req, res) => {
  res.send(posts);
});

app.get("/", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  post[id] = {
    id,
    title,
  };

  res.status(201).send(posts[id]);
});

app.listen(port, () => console.log(`Post service up on port: ${port}`));
