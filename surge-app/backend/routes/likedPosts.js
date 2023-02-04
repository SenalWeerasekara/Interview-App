const express = require('express')
const router = express.Router();
const {createLike} = require('../controllers/LikedPostControl')
const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth)



// router.get('/likes', getMyPosts)

router.post('/like', createLike)

// router.delete('/:id', deletePost)


module.exports = router