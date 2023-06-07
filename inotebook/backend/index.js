const { PromiseProvider } = require('mongoose');
const connectToMongo = require('./db');
const express = require('express');
connectToMongo();

const app = express();
const port=3000

//Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () =>{
    console.log('listening on port : '+port);
});