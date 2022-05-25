// --------------- //
// Dependencies 
// --------------- //
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5656;

// --------------- //
// Routes 
// --------------- //
app.get("/", (req, res) => res.send("Hello World"));

// Listener
app.listen(PORT, () => console.log(`Listening on Port: ${PORT}...`))