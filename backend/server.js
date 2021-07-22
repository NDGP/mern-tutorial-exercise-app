const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

require('dotenv').config();

//create server
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('mongoDB database connection established succeccfully');
});

const exerciseRouter = require('./routes/exercises');
const usersRouter = require('./routes/users')

app.use('/exercises', exerciseRouter);
app.use('/users', usersRouter)

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});