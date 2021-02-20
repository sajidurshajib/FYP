const mongoose = require('mongoose')

const Schema = mongoose.Schema

const profileSchema = new Schema({
    user_foreign:{
        type: String,
        required:true
    },
    point:{
        type: Number,
        required: true
    },
    image:{
        type:String,
        required: true
    },
    occupation:{
        type: String,
        required: true
    },
    position:{
        type: String,
        required: true
    },
    header:{
        type: String,
        required:true
    },
    bio:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required: true
    },
    twitter:{
        type: String,
        required: true
    },
    linkedin:{
        type: String,
        required: true
    },
    github:{
        type: String,
        required: true
    },
    date:{
        type:Date,
        default: Date.now
    }
})

const Profile = mongoose.model('Profile',profileSchema)
module.exports = Profile