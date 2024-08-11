const express = require("express");
const {
  getMessages,
  getNewMessageForm,
  addNewMessage,
} = require("../controllers/messagesController");

const messagesRouter = express.Router();

messagesRouter.get("/", getMessages);

messagesRouter.get("/new", getNewMessageForm);

messagesRouter.post("/new", addNewMessage);

module.exports = messagesRouter;
