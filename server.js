import app from "./api";

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("SERVER RUNNING ON PORT " + PORT);
});
