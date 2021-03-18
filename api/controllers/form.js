const Form = require('../models/Form')
const User = require('../models/User')


const all = (req,res,next)=>{
    Form.find()
        .then(form=>{
            res.json({
                form
            })
        })
        .catch(err=>{
            res.json({
                err
            })
        })
}

//New profile
const newForm = (req,res,next)=>{

    const newForm = new Form({
        author_foreign:req.body.author_foreign,
        title:req.body.title,
        description:req.body.description,
        form:req.body.form,
        access:req.body.access
    }) 

    newForm.save()
        .then(data=>{
            res.json({
                form:data
            })
        })
        .catch(err=>{
            res.status(400).json({msg:err})
        })
}


module.exports = {
    all,
    newForm
}