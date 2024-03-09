const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("DB CCONNECTED SUCCESSFULLY");
    })
    .catch((error) => {
      console.log("ERROR IN CONNECTION WITH DB");
      console.error(error);
      process.exit(1);
    });
};

module.exports = dbConnect;
