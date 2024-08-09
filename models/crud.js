const mongoose = require("mongoose");

const crud = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
});

const Modal = mongoose.model("Crud", crud);

module.exports = { Modal };
