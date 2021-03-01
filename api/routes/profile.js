const router = require('express').Router()

const profileController = require('../controllers/profile')
//Auth import 
const auth = require('../middleware/auth')

//all
router.get('/all',profileController.all)

//Single
router.get('/single/',auth,profileController.singleProfile)

//Edit
router.patch('/edit/',auth,profileController.editProfile)

router.post('/',auth,profileController.newProfile)


module.exports = router