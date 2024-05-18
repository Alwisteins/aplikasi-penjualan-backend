import express from "express";
import bodyParser from "body-parser";
import path from "path";
import cors from 'cors';
import mainRouter from "../src/routes/salesRoutes";
import errorMiddleware from "../src/middleware/errorMiddleware";

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the server!" });
});

app.use("/api/v1", mainRouter);

// serve static files
app.use(express.static(path.join(__dirname, "public")));

app.use(errorMiddleware);

// handle not existing endpoint
app.use("*", (req, res) => {
  res.status(404).json({ error: "Not found" });
});

module.exports = app;
