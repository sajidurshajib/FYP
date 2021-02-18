const Profile = require('../models/Profile')

//All
const all = (req,res,next)=>{
    Profile.find()
        .then(profiles=>{
            res.json({
                profiles
            })
        })
        .catch(err=>{
            res.json({
                err
            })
        })
}

//Single profile
const singleProfile = (req, res, next)=>{
    let id = req.params.id
    Profile.findById(id)
        .then(data => {
            res.json({
                msg: 'Profile',
                profile: data
            })
        })
        .catch(err=>status(400).res.json({err}))
}


//New profile
const newProfile = (req,res,next)=>{
    
    const newProfile = new Profile({
        user_foreign:req.body.user_foreign,
        point:req.body.point,
        image:req.body.image,
        occupation:req.body.occupation,
        position:req.body.position,
        header:req.body.header,
        bio:req.body.bio,
        twitter:req.body.twitter,
        linkedin:req.body.linkedin,
        github:req.body.github
    }) 

    newProfile.save()
        .then(data=>{
            res.json({
                msg:'Profile created',
                data
            })
        })
        .catch(err=>status(400).res.json({err}))
}


//Edit profile
const editProfile = (req,res,next)=>{
    const id = req.params.id
    let updateProfile = {
        point:req.body.point,
        image:req.body.image,
        occupation:req.body.occupation,
        position:req.body.position,
        header:req.body.header,
        bio:req.body.bio,
        twitter:req.body.twitter,
        linkedin:req.body.linkedin,
        github:req.body.github
    }

    Profile.findByIdAndUpdate(id, {$set: updateProfile})
        .then(data => {
            Profile.findById(data._id)
                .then(newData => {
                    res.json({
                        msg:'Contact update',
                        newData
                    })
                })
        })
        .catch(err=>status(400).res.json({err}))
}

module.exports = {
    all,
    singleProfile,
    newProfile,
    editProfile
}