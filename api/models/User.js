const mongoose = require('mongoose')
const valid = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        trim: true,
        validate: {
            validator: (v)=>{
                return valid.isEmail(v)
            },
            message: `{VALUE} is not email`
        }
    },
    username: {
        type: String,
        trim: true,
        min: 3
    },
    password:{
        type: String,
        min: 3
    }
})

const User = mongoose.model('User',userSchema)
module.exports = User