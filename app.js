const express = require("express");
const app = express();
const path = require("node:path");
const messagesRouter = require("./routes/messagesRouter");

require("dotenv").config();
const PORT = process.env.PORT;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello World!"));
app.use("/messages", messagesRouter);

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
