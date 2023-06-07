const { PromiseProvider } = require('mongoose');
const connectToMongo = require('./db');
const express = require('express');
connectToMongo();

const app = express();
const port=3000

app.get('/', (req,res) =>{
    res.send('Hello');
});

app.listen(port, () =>{
    console.log('listening on port : '+port);
});