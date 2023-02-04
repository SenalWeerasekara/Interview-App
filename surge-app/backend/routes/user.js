const express = require('express')
const {signupUser, loginUser, getUserDetails} = require('../controllers/userControl')
const router = express.Router()
const requireAuth = require('../middleware/requireAuth')



//login route
router.post('/login', loginUser)

//signup route
router.post('/signup', signupUser)

router.use(requireAuth)
//getUser route
router.get('/oneuser', getUserDetails)

module.exports = router