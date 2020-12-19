const mongoose = require('mongoose')
const valid = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        validate: {
            validator: (v)=>{
                return valid.isEmail(v)
            },
            msg: `{VALUE} is not email`
        }
    },
    password:{
        type: String,
        min: 3
    },
    register_date:{
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('User',userSchema)
module.exports = User