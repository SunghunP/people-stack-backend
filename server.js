// --------------- //
// Dependencies 
// --------------- //
require('dotenv').config();

// import express and create app object
const express = require('express');
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');

// pull PORT and DATABASE_URL from .env
const { PORT = 5656, DATABASE_URL } = process.env;

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
app.get("/", (req, res) => res.send("Hello World"));

// Listener
app.listen(PORT, () => console.log(`Listening on Port: ${PORT}...`));