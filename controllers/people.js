const People = require("../models/people");

module.exports = {
  index,
}

async function index(req, res) {
  try {
    res.json(await People.find({}));
  } catch(err) {
    res.status(400).json(err);
  }
}
