const mongoose = require('mongoose')
const Schema = mongoose.Schema

const likedPostsSchema = new Schema({
    likePostID:{
        type: String,
        required : true
    },
    likeUserID: {
        type: String,
        required : true
    }
}, {timestamps : true})

module.exports = mongoose.model('LikedPost', likedPostsSchema)