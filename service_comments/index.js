const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");

const port = 4001;

const app = express();
app.use(bodyParser.json());

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  res.send(posts);
});

app.get("/posts/:id/comments", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  const { content } = req.body

  const comments = commentsByPostId[req.params.id] || []

  comments.push({ id, content })

  commentsByPostId[req.params.id] = comments

  res.status(201).send(posts[id]);
});

app.listen(port, () => console.log(`Comment service up on port: ${port}`));
