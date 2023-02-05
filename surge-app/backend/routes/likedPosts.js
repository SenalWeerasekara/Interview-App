const express = require('express')
const router = express.Router();
const {createLike} = require('../controllers/LikedPostControl')
const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth)

router.post('/like', createLike)

module.exports = router

// Post Like system is still under construction. when the user liked, it will add user ID + post ID to a table right now
// idea is to use mongoDB aggregation pipeline to check and set a like status value.
// This way its possible to know if a user already liked a post or not. 