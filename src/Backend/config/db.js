const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://Book-My-Show-clone:Bookmyshow11@cluster0.xygqu.mongodb.net/BookmyShow"
  );
};

module.exports = connect;
