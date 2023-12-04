const { Schema } = require("mongoose");

const personSchema = new Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  favoriteFoods: {
    type: [String],
  },
});


module.exports = personSchema;
