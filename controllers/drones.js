const { Drone } = require("../models")

const create = async (req, res) => {
  try {
    const drone = await Drone.create(req.body)
    console.log(drone.toJSON());
    res.status(200).json(drone)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

module.exports = {
  create,
}