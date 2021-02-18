const router = require('express').Router()

const profileController = require('../controllers/profile')

//all
router.get('/all',profileController.all)

//Single
router.get('/single/:id',profileController.singleProfile)

//Edit
router.put('/edit/:id',profileController.editProfile)

router.post('/',profileController.newProfile)


module.exports = router