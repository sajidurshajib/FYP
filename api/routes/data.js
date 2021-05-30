const router = require('express').Router()

const dataController = require('../controllers/data')
//Auth import 
const auth = require('../middleware/auth')

router.get('/set',dataController.set)

module.exports = router