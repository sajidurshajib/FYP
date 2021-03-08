const router = require('express').Router()

const formController = require('../controllers/form')
//Auth import 
const auth = require('../middleware/auth')

router.post('/',formController.newProfile)


module.exports = router