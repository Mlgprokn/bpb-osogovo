require('dotenv').config();

//set up express
const express = require('express');
const app = express();
const { json } = require('express');

//set up mongoose
const mongoose = require('mongoose');

//middleware
//use json
app.use(express.json());

//routes

//tracks routes
const tracksRoutes = require('./controllers/tracks');
app.use('/api/tracks', tracksRoutes);

//connect to mongodb
mongoose.connect(process.env.DATABASE_URL);

//get the connection
const db = mongoose.connection;

//print status
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to mongodb'));

//start the server
app.listen(3000, () => console.log('Server started on 3000'));
