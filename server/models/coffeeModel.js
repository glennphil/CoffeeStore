const mongoose = require('mongoose')

const Schema = mongoose.Schema

const coffeeSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  flavor: {
    type: String,
    required: true
  },
  strength: {
    type: String,
    required: true
  },
  caffienated: {
    type: String,
    required: true
  },
  origin: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  note: {
    type: String,
    required: false
  }
}, { timestamps: true })

module.exports = mongoose.model('Coffee', coffeeSchema)