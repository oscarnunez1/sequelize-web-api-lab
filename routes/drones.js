const router = require('express').Router()
const dronesCtrl = require('../controllers/drones.js')

// routes
router.post('/', dronesCtrl.create)
router.get('/', dronesCtrl.index)
router.put('/id', dronesCtrl.update)




module.exports = router