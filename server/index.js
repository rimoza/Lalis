const home = require('./routes/homes');
const guest = require('./routes/guests');
const usersHistory = require('./routes/usersHistory');
const cors = require('cors');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const express = require('express');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/homes', home);
app.use('/api/guests', guest);
app.use('/api/userHistory', usersHistory)

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