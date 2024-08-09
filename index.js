const express = require("express");
const { connectionDB } = require("./db/connection");
const crudRoute = require("./routes/crud");

const app = express();
app.use(express.json());

// app.get("/", (_, res) => {
//   return res.send("Home Page");
// });

app.use("/", crudRoute);

app.listen(8000, () => {
  connectionDB();
  console.log("Server is running on port 8000");
});
