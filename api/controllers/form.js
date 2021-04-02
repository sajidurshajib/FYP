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

    //just find username

    User.findById(req.user.id)
        .then(user=>{
            //userName = JSON.stringify(user.name)
        

    //Point should be minus
    const newForm = new Form({
        author_foreign:req.user.id,
        author_name:user.name,
        title:req.body.title,
        description:req.body.description,
        form_data:req.body.form_data,
        form_submit:req.body.form_submit
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

        //ew
    })
}


module.exports = {
    all,
    newForm
}