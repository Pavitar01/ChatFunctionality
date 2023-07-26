const { userModel } = require("../Models/UserModel");

const CreateUserController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.send("Please Enter Name");
    } else {
      const user = await new userModel({
        name:name,
      }).save();

      res.status(200).send({
        message: "User Add successfully!",
        success: true,
        user,
      });
    }
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Something went wrong",
    });
  }
};
module.exports = { CreateUserController };
