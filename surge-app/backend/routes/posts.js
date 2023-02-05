const express = require('express')
const router = express.Router();
const {createPost, updateLike , getPosts, getSinglePost, deletePost, updatePost, getMyPosts} = require('../controllers/postControl')
const requireAuth = require('../middleware/requireAuth')

router.put('/like/:id', updateLike)

router.use(requireAuth)

//Get all posts
router.get('/', getPosts)

router.get('/my', getMyPosts)

router.get('/:id', getSinglePost)

router.post('/', createPost)

router.delete('/:id', deletePost)

router.patch('/:id', updatePost)

module.exports = router