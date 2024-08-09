const mongoose = require("mongoose");

function connectionDB() {
  console.log("connect to DB");
  mongoose.connect("mongodb://127.0.0.1:27017/crud_backend");
}

module.exports = { connectionDB };
