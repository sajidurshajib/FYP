const router = require('express').Router()

const formController = require('../controllers/form')
//Auth import 
const auth = require('../middleware/auth')

router.get('/all',formController.all)

router.post('/single',formController.singleForm)

router.get('/personal/:id',formController.personalForm)

router.post('/',auth,formController.newForm)


module.exports = router