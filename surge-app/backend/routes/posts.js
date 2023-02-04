const express = require('express')
const router = express.Router();
const {createPost, getPosts, getSinglePost, deletePost, updatePost} = require('../controllers/postControl')
const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth)

//Get all workout
router.get('/', getPosts)

router.get('/:id', getSinglePost)

router.post('/', createPost)

router.delete('/:id', deletePost)

router.patch('/:id', updatePost)

module.exports = router