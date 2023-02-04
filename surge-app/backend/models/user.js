const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const validator = require('validator')


const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type : String,
        required : true
    },
    profilePicture : {
        type : String,
        required : false
    },
    username : {
        type : String,
        required : false
    }
})

// static signup method
userSchema.statics.signup = async function (email, password) {

    //validation
    if (!email || !password){
        throw Error('All fields are empty')
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password is not strong')
    }

    const exists = await this.findOne({ email })
    if (exists){
        throw Error('email already in use') 
    }

    //hashing password
    const salt = await bcrypt.genSalt(5)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({email, password: hash})
    return user
}

//static login method
userSchema.statics.login = async function(email, password) {
    if (!email || !password){
        throw Error('All fields are empty')
    }

    const user = await this.findOne({email})
    if (!user){
        throw Error('Email does not exist')
    }

    const match = await bcrypt.compare(password, user.password)
    if (!match){
        throw Error('Password Incorrect')
    }

    return user
}

module.exports = mongoose.model('User', userSchema)