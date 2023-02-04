const User = require('../models/user')
const jwt  = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id : _id}, process.env.SECRET, {expiresIn : '1d'})
}

// login user
const loginUser = async (req, res) => {
    const {email, password} = req.body

    try{
        const user = await User.login(email, password)

        //create token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error : error.message})
    }
}

// signup user
const signupUser = async (req, res) => {
    const { email, password, username, name, imageFile } = req.body
    try{
        const user = await User.signup(email, password, username, name, imageFile)

        //create token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error : error.message})
    }
}

//get userDetails
const getUserDetails = async(req, res) =>{
    const userID = req.user._id
    console.log("this is id" + userID)
    const userD = await User.findOne({_id: userID}).sort({createdAt: -1})
    const user = {email : userD.email, name : userD.name, username : userD.username, imageFile : userD.imageFile}
    res.status(200).json(user)
console.log(user)

    
}




module.exports = {signupUser, loginUser, getUserDetails}