const { messagemodel } = require("../Models/MessageModel");

const messageController = async (req, res) => {
  try {
    const { message, UserId } = req.body;
    if (!message) {
      return res.send("Please Add message");
    } else {
      const messages = await new messagemodel({
        message,
        userId: UserId,
      }).save();

      res.status(200).send({
        message: "Message Send successfully!",
        success: true,
        messages,
      });
    }
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Something went wrong",
    });
  }
};

const getMessageController = async (req, res) => {
  try {
    const message = await messagemodel.find({});
    res.status(200).send({
      message: "All Message !",
      success: true,
      message,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};
const deletMessageController = async (req, res) => {};

module.exports = {
  messageController,
  getMessageController,
  deletMessageController,
};
