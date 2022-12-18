const express = require('express');
const mongoose = require('mongoose');
const games = require('./routes/games');

const app = express();
app.use(express.json());

app.use('/games', games);

const dbUrl = 'mongodb+srv://lalis_user:Haa12345678a@cluster0.wvlwkgy.mongodb.net/valleyball?retryWrites=true&w=majority'

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose.connect(dbUrl, connectionParams)
  .then(() =>{
    console.log('Connected to database...');
  })
  .catch((err) =>{
    console.log('Error: ', err)
  });

app.listen(5000, () => console.log('Server running on port: 5000'));