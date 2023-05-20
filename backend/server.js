const express = require("express");
const notes = require("./Data/notes.js");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => req.params.id === n._id);
  res.json(note);
});

const PORT = process.env.PORT || 6000;

app.listen(PORT, console.log(`Server started at port ${PORT}`));
