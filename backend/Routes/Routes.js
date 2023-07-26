const express = require('express');
const { messageController,getMessageController, deletMessageController } = require('../Controllers/MessageControllers');
const MessageRouter=express.Router();


MessageRouter.post("/create-message",messageController);
MessageRouter.get("/get-message",getMessageController);
MessageRouter.get("/delete-message",deletMessageController);



module.exports={MessageRouter}