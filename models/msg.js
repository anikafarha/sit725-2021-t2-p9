const mongoose = require("mongoose");

const msgSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  msg: {
    type: String,
    required: true,
  },
});

module.exports = UploadModel = mongoose.model("msg send", msgSchema);
