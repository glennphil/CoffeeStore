const User = require('../models/userModel')
const mongoose = require('mongoose')

// get all coffees
const getUsers = async (req, res) => {
  const users = await User.find({}).sort({createdAt: -1})

  res.status(200).json(users)
}

// get a single coffee
const getUser = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such coffee'})
  }

  const user = await User.findById(id)

  if (!user) {
    return res.status(404).json({error: 'No such coffee'})
  }

  res.status(200).json(user)
}

// create a new coffee
const createUser = async (req, res) => {
  const {email, password } = req.body

  let emptyFields = []

  if (!email) {
    emptyFields.push('email')
  }
  if (!password) {
    emptyFields.push('password')
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
  }

  // add to the database
  try {
    const user = await User.create({ email, password })
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a coffee
const deleteUser = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such coffee'})
  }

  const user = await User.findOneAndDelete({_id: id})

  if(!user) {
    return res.status(400).json({error: 'No such coffee'})
  }

  res.status(200).json(user)
}

// update a coffee
const updateUser = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such coffee'})
  }

  const user = await User.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!user) {
    return res.status(400).json({error: 'No such coffee'})
  }

  res.status(200).json(user)
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser
}