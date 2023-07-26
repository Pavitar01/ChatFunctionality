const mongoose = require("mongoose");
const Message = new mongoose.Schema({
  message: {
    type: String,
  },
  userId: {
    type: String,
    default:"none"
  },
});
const messagemodel = mongoose.model("message", Message);
module.exports = { messagemodel };
