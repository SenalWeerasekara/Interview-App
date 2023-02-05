const LikedPost = require('../models/likedPosts')
const mongoose = require('mongoose')

//create new post
const createLike = async(req, res) => {
    const likePostID = req.body.likedPostID
    
    try{
        const likeUserID = req.user._id
        const likepost = await LikedPost.create({likeUserID, likePostID})
        res.status(200).json(likepost)
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    createLike
}