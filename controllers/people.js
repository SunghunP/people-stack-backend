const People = require("../models/people");

module.exports = {
  index,
  create,
}

async function index(req, res) {
  try {
    // fetch all people from our DB
    res.json(await People.find({}));
  } catch(err) {
    // send the error
    res.status(400).json(err);
  }
}

async function create(req, res) {
  try {
    // send all people to the DB
    res.json(await People.create(req.body));
  } catch (err) {
    // send the error 
    res.status(400).json(err);
  }
}
