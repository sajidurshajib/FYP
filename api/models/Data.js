const mongoose = require('mongoose')

const Schema = mongoose.Schema

const dataSchema = new Schema({
    author_foreign:{
        type: String,
        required:true
    },
    form_foreign:{
        type: String,
        required:true
    },
    data:{
        type:Array,
        required: true
    },
    date:{
        type:Date,
        default: Date.now
    }
})

const Data = mongoose.model('Data',dataSchema)
module.exports = Data