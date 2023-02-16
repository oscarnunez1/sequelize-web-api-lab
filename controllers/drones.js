const { Drone } = require("../models")

const create = async (req, res) => {
  try {
    const cat = await Cat.create(req.body)
    res.status(200).json(cat)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
}