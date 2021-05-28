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


const singleForm = (req, res, next)=>{
    let id = {_id:req.body.id}
    console.log(id)
    Form.find(id)
        .then(data => {
            //if(data.length==0) return res.status(400).json({msg:'No data found'})
            res.json({
                form: data
            })
        })
        .catch(err=>res.status(400).json({msg:err}))
}




//New profile
const newForm = (req,res,next)=>{

    //just find username

    Profile.find({user_foreign:req.user.id})
        .then(data=>{
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
                    return res.status(400).json({msg:err})
                })

            //User
        })

    //Profile
        //minus point
        let p = data[0].point - 50;
        let updateProfile = {
            point:p
        }
        Profile.findOneAndUpdate({user_foreign:req.user.id},updateProfile, {new:true})
        .then(data => {
            Profile.findById(data._id)
                .then(newData => {
                    res.json({
                        profile:newData
                    })
                })
        })
        .catch(err=>{
            return res.status(400).json({msg:err})
        })

    })
}


module.exports = {
    all,
    singleForm,
    newForm
}