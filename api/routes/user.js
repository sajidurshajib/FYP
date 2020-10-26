const router = require('express').Router()

//User controller import
const userController = require('../controllers/user')
//Auth import 
const auth = require('../middleware/auth')


//login
router.post('/login',userController.login)

//login
router.post('/register',userController.register)

//reset password
router.put('/resetpass/:username',auth,userController.reset)

//all
router.get('/',auth,userController.all)

module.exports = router