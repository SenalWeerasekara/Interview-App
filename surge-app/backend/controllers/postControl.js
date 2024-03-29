const Post = require('../models/posts')
const mongoose = require('mongoose')

//create new post
const createPost = async(req, res) => {
    const {username, description, likes, imageFile} = req.body

    try{
        const userID = req.user._id
        const post = await Post.create({username, description, likes, imageFile, userID})
        console.log(imageFile)
        res.status(200).json(post)
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

//get all posts
const getPosts = async(req, res) =>{
    const post = await Post.find({}).sort({createdAt: -1})
    res.status(200).json(post)
}

// get all my posts
const getMyPosts = async(req, res) =>{
    const userID = req.user._id
    console.log(userID)

    const post = await Post.find({userID}).sort({createdAt: -1})
    res.status(200).json(post)
}

//get single post
const getSinglePost = async(req, res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such data'})
    }

    const post = await Post.findById(id)
    if(!post){
        return res.status(404).json({error: 'No data Found'})
    }
    res.status(200).json(post)
}

const deletePost = async(req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such data'})
    }
    const post = await Post.findOneAndDelete({_id: id})

    if(!post){
        return res.status(404).json({error:'no post'})
    }
    return res.status(200).json(post)
}

const updatePost = async (req, res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such data'})
    }

    const post = await Post.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!post){
        return res.status(404).json({error:'no post'})
    }
    return res.status(200).json(post)
}

//update like
const updateLike = async(req, res) => {
    console.log("backend like works")
    const postID = req.params.id;
    const likes = req.body.data;
    console.log("postID " + postID + "   " + "like " + likes)

    const post = await Post.findOneAndUpdate({_id: postID}, {likes})
    if(!post){
        return res.status(404).json({error:'no post'})
    }
    return res.status(200).json(post)
}


module.exports = {
    createPost,
    getPosts,
    getSinglePost,
    deletePost,
    updatePost,
    getMyPosts,
    updateLike
}