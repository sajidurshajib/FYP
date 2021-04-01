const mongoose = require('mongoose')

const Schema = mongoose.Schema

const formSchema = new Schema({
    author_foreign:{
        type: String,
        required:true
    },
    author_name:{
        type: String,
        required:true
    },
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    form_data:{
        type:Array,
        required: true
    },
    form_submit:{
        type:Array,
        required: true
    },
    date:{
        type:Date,
        default: Date.now
    }
})

const Form = mongoose.model('Form',formSchema)
module.exports = Form