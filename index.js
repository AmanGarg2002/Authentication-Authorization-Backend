const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(express.json());

const dbConnect = require("./config/database");
dbConnect();

const user = require("./routes/user");
app.use("/api/v1", user);

app.listen(PORT, () => {
  console.log(`SERVER STARTED AT PORT: ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(`<h1>THIS IS HOMEPAGE</h1>`);
});
