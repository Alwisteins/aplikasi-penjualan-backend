import app from "./api";

const PORT = process.env.PORT || 88;

app.listen(PORT, () => {
  console.log("SERVER RUNNING ON PORT " + PORT);
});
