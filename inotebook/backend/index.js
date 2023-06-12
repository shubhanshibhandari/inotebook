const { PromiseProvider } = require('mongoose');
const connectToMongo = require('./db');
const express = require('express');
// connectToMongo();

const app = express();
const port=5000

app.use(express.json());

//Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

// app.listen(port, () =>{
//     console.log('listening on port : '+port);
// });

const start = async () => {
    try {
      await connectToMongo();
      app.listen(port, () => {
        console.log(`Connected to ${port}`);
      });
    } catch (error) {
      console.log(error);
    }
  };

  start();