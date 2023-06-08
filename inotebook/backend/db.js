const mongoose = require('mongoose');
const mongoURI= "mongodb://0.0.0.0:27017/?directConnection=true";
const connectToMongo = () => {
    mongoose
      .connect(mongoURI)
      .then(() => console.log("connection success"))
      .catch((err) => console.log(err));
  };

module.exports = connectToMongo;