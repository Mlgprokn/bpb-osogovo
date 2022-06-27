require('dotenv').config();

//set up express
const express = require('express');
const app = express();
const { json } = require('express');

//set up cors
const cors = require('cors');

//set up mongoose
const mongoose = require('mongoose');

//middleware
//use json
app.use(express.json());

//use cors
const whitelist = ['http://localhost:3000'];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));

//routes
//tracks routes
const tracksRoutes = require('./controllers/tracks');
app.use('/api/tracks', tracksRoutes);

//info routes
const infoRoutes = require('./controllers/info');
app.use('/api/info', infoRoutes);

//charities routes
const charitiesRoutes = require('./controllers/charities');
app.use('/api/charities', charitiesRoutes);

//sponsors routes
const sponsorsRoutes = require('./controllers/sponsors');
app.use('/api/sponsors', sponsorsRoutes);

//countdowns routes
const countdownsRoutes = require('./controllers/countdowns');
app.use('/api/countdowns', countdownsRoutes);

//connect to mongodb
mongoose.connect(process.env.DATABASE_URL);

//get the connection
const db = mongoose.connection;

//print status
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to mongodb'));

//start the server
app.listen(3001, () => console.log('Server started on 3001'));
