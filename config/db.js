require('dotenv').config();
const mongoose = require('mongoose');
function connectDB() {
  // Database connection 🥳
  mongoose.connect(
    process.env.MONGO_CONNECTION_URI,
    {
      useNewUrlParser: true, useUnifiedTopology: true
    },
    (err) => {
      if (err) console.error("Error!" + err);
      else console.log("Database connection successfull");
    }
  );
}

module.exports = connectDB;