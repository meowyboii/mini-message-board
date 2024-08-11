const getMessages = (req, res) => {
  res.send("All Messages");
};
const getNewMessage = (req, res) => {
  res.send("New Message");
};
module.exports = { getMessages, getNewMessage };
