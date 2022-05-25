const People = require("../models/people.js");

module.exports = {
  index,
  deletePerson,
  update,
  create,
  show,
}

// INDUCES - index delete update create extension show
// People Index Route
async function index(req, res) {
  try {
    // fetch all people from our DB
    res.json(await People.find({}));
  } catch (err) {
    // send the error
    res.status(400).json(err);
  }
}

// People Delete Route
async function deletePerson(req, res) {
  try {
    // send all people
    res.json(await People.findByIdAndDelete(req.params.id));
  } catch (err) {
    // send error
    res.status(400).json(err);
  }
}

// People Update Route
async function update(req, res) {
  try {
    // send all people
    res.json(
      await People.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (err) {
    // send error
    res.status(400).json(err);
  }
} 

// People Create Route
async function create(req, res) {
  try {
    // send all people 
    res.json(await People.create(req.body));
  } catch (err) {
    // send the error 
    res.status(400).json(err);
  }
}

// People Show Route
async function show(req, res) {
  try {
    // send all people
    res.json(await People.findById(req.params.id));
  } catch (err) {
    res.status(400).json(err);
  }
}