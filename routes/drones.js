const router = require('express').Router()
const dronesCtrl = require('../controllers/drones.js')

// routes
router.post('/', dronesCtrl.create)



module.exports = router