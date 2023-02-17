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
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {
    const drone = await Drone.findByPk(req.params.id)
    drone.set(req.body)
    await drone.save()
    res.status(200).json(drone)
  } catch (error) {
    res.status(200),json(error)
  }
}

const deleteDrone = async (req, res) => {
  try {
    const drone = await Drone.findByPk(req.params.id)
    await drone.destroy()
    res.status(200).json(drone)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
  update,
  delete: deleteDrone,
}