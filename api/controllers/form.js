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

    //Point should be minus
    
    const newForm = new Form({
        author_foreign:user.id,
        author_name:user.name,
        title:req.body.title,
        description:req.body.description,
        form:req.body.form
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