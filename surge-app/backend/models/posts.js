const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postsSchema = new Schema({
    username:{
        type: String,
        required: false
    },
    description:{
        type: String,
        required: false
    },
    likes:{
        type: Number,
        required: false
    },
    imageFile:{
        type: String,
        required : false
    },
}, {timestamps : true})

module.exports = mongoose.model('Post', postsSchema)