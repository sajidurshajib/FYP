const Form = require('../models/Form')
const User = require('../models/User')
const Profile = require('../models/Profile')


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

    Profile.find({user_foreign:req.user.id})
        .then(data=>{
            console.log(data[0].point)
            if(data[0].point<50) return res.status(400).json({msg:'You haven\'t enough point'})
            


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

    //profile
    })
}


module.exports = {
    all,
    newForm
}