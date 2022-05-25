const mongoose = require("mongoose");
// destructure the Schema and model from mongoose
const { Schema, model } = mongoose;

const PeopleSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String },
  title: { type: String },
});

// give the People model a schema
const People = model("People", PeopleSchema);

// export the model
module.exports = People;