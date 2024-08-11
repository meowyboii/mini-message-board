const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const getMessages = (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
};
const getNewMessageForm = (req, res) => {
  res.render("form");
};

const addNewMessage = (req, res) => {
  const { author, message } = req.body;
  messages.push({ text: message, user: author, added: new Date() });
  console.log(`Message received: ${message} from ${author}`);
  res.redirect("/messages");
};

module.exports = { getMessages, getNewMessageForm, addNewMessage };
