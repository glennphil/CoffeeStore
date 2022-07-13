const Coffee = require('../models/coffeeModel')
const mongoose = require('mongoose')

// get all coffees
const getCoffees = async (req, res) => {
  const coffees = await Coffee.find({}).sort({createdAt: -1})

  res.status(200).json(coffees)
}

// get a single coffee
const getCoffee = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such coffee'})
  }

  const coffee = await Coffee.findById(id)

  if (!coffee) {
    return res.status(404).json({error: 'No such coffee'})
  }

  res.status(200).json(coffee)
}

// create a new coffee
const createCoffee = async (req, res) => {
  const {title, strength, flavor, caffienated, origin, price} = req.body

  let emptyFields = []

  if (!title) {
    emptyFields.push('title')
  }
  if (!strength) {
    emptyFields.push('strength')
  }
  if (!flavor) {
    emptyFields.push('flavor')
  }
  if (!caffienated) {
    emptyFields.push('caffienated')
  }
  if (!origin) {
    emptyFields.push('origin')
  }
  if (!price) {
    emptyFields.push('price')
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
  }

  // add to the database
  try {
    const coffee = await Coffee.create({ title, strength, flavor, caffienated, origin, price })
    res.status(200).json(coffee)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a coffee
const deleteCoffee = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such coffee'})
  }

  const coffee = await Coffee.findOneAndDelete({_id: id})

  if(!coffee) {
    return res.status(400).json({error: 'No such coffee'})
  }

  res.status(200).json(coffee)
}

// update a coffee
const updateCoffee = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such coffee'})
  }

  const coffee = await Coffee.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!coffee) {
    return res.status(400).json({error: 'No such coffee'})
  }

  res.status(200).json(coffee)
}

module.exports = {
  getCoffees,
  getCoffee,
  createCoffee,
  deleteCoffee,
  updateCoffee
}