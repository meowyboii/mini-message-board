const express = require("express");
const app = express();
const messagesRouter = require("./routes/messagesRouter");

require("dotenv").config();
const PORT = process.env.PORT;

app.get("/", (req, res) => res.send("Hello World!"));
app.use("/messages", messagesRouter);

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
