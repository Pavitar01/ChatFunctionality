const mongoose = require("mongoose");
const User = new mongoose.Schema({
  name: {
    type: String,
  },
});
const userModel = mongoose.model("user", User);
module.exports = { userModel };
