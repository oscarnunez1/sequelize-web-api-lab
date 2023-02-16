const router = require('express').Router()
const dronesCtrl = require('../controllers/drones.js')

// routes
router.post('/', dronesCtrl.create)
router.get('/', dronesCtrl.index)




module.exports = router