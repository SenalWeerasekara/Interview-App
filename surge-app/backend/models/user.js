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
    name: {
        type: String,
        required: true,
    },
    password: {
        type : String,
        required : true
    },
    imageFile : {
        type : String,
        required : false
    },
    username : {
        type : String,
        required : true,
        unique: true
    }
})

// static signup method
userSchema.statics.signup = async function (email, password, username, name, imageFile) {

    //validation
    if (!email || !password || !username){
        throw Error('All fields must be filled')
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password is not strong')
    }

    const existsEmail = await this.findOne({ email })
    if (existsEmail){
        throw Error('email already in use') 
    }

    const existsUsername = await this.findOne({ username })
    if (existsUsername){
        throw Error('username is already taken') 
    }

    //hashing password
    const salt = await bcrypt.genSalt(5)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({email, password: hash, username, name, imageFile})
    return user
}

//static login method
userSchema.statics.login = async function(email, password) {
    if (!email || !password){
        throw Error('All fields must be filled')
    }

    let user = await this.findOne({email})
    if (!user){
        user = await this.findOne({username: email})
    }
    if (!user){
        throw Error('Email or Username does not exist')
    }

    const match = await bcrypt.compare(password, user.password)
    if (!match){
        throw Error('Password Incorrect')
    }

    return user
}

module.exports = mongoose.model('User', userSchema)