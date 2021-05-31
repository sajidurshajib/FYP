const router = require('express').Router()

const dataController = require('../controllers/data')
//Auth import 
const auth = require('../middleware/auth')

router.post('/set',auth,dataController.set)

router.get('/find/:id',dataController.find)

module.exports = router