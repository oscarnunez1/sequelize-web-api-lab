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

const index = async (req, res) => {
  try {
    const drones = await Drone.findAll()
    res.status(200).json(drones)
  } catch (error) {
    res.status(500).jspn(error)
  }
}

const update = async (req, res) => {
  try {
    const drone = await Drone.update(
      req.body,
      { where: { id: req.params.id }, returning: true }
    )
    res.status(200).json(drone)
  } catch (error) {
    res.status(200),json(error)
  }
}

module.exports = {
  create,
  index,
  update,
}