const mongoose = require('mongoose');
const mongoURI= "mongodb://localhost:27017";
const connectTomongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connection established to database " + mongoURI);
    })
}

module.exports = connectTomongo;