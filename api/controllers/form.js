const Form = require('../models/Form')

//New profile
const newForm = (req,res,next)=>{

    const newForm = new Form({
        author_foreign:req.body.id,
        title:req.body.tittle,
        description:req.body.description,
        form:req.body.form,
        access:req.body.access
    }) 

    
    newForm.save()
        .then(data=>{
            console.log(data)
            res.json({
                form:data
            })
        })
        .catch(err=>{
            res.status(400).json({msg:err})
        })
}


module.exports = {
    newForm
}