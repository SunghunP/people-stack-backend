// --------------- //
// Dependencies 
// --------------- //
require('dotenv').config();

// pull PORT and DATABASE_URL from .env
const { PORT = 5656, DATABASE_URL } = process.env;

// import express and create app object
const express = require('express');
const app = express();

const cors = require('cors');
const morgan = require('morgan');
const { default: mongoose } = require('mongoose');

// --------------- //
// Middleware
// --------------- //
app.use(morgan("dev")); // log every HTTP request

// --------------- //
// Database Connection 
// --------------- //
mongoose.connect(DATABASE_URL);

// Connection messages
mongoose.connection
  .on("open", () => console.log("Connection to MongoDB established!"))
  .on("close", () => console.log("Lost connection to MongoDB!"))
  .on("error", (error) => console.log(error));

// --------------- //
// Routes 
// --------------- //
const indexRouter = require('./routes/index'); // import index routes
const peopleRouter = require('./routes/people'); // import people routes

// let the app Use the routes
app.use("/", indexRouter);
app.use('/people', peopleRouter)

// Listener
app.listen(PORT, () => console.log(`Listening on Port: ${PORT}...`));