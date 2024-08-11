const express = require("express");
const {
  getMessages,
  getNewMessage,
} = require("../controllers/messagesController");

const messagesRouter = express.Router();

messagesRouter.get("/", getMessages);

messagesRouter.get("/new", getNewMessage);

module.exports = messagesRouter;
