import express from "express";
import bodyParser from "body-parser";
import path from "path";

const app = express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the server!" });
});

// serve static files
app.use(express.static(path.join(__dirname, "public")));

// handle not existing endpoint
app.use("*", (req, res) => {
  res.status(404).json({ error: "Not found" });
});

module.exports = app;
