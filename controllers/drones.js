const { Drone } = require("../models")

const create = async (req, res) => {
  try {
    const drone = await Drone.create(req.body)
    res.status(200).json(cat)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

module.exports = {
  create,
}