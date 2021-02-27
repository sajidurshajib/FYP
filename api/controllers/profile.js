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
    let user_foreign = req.user.id
    Profile.find({user_foreign})
        .then(data => {
            if(data.length==0) return res.status(400).json({msg:'No data found'})
            res.json({
                profile: data
            })
        })
        .catch(err=>status(400).res.json({msg:err}))
}


//New profile
const newProfile = (req,res,next)=>{

    console.log('Here...')
    console.log(req.body.bio)

    
    const newProfile = new Profile({
        user_foreign:req.user.id,
        point:50,
        image:req.body.image,
        occupation:req.body.occupation,
        position:req.body.position,
        header:req.body.header,
        bio:req.body.bio,
        email:req.body.email,
        twitter:req.body.twitter,
        linkedin:req.body.linkedin,
        github:req.body.github
    }) 

    
    newProfile.save()
        .then(data=>{
            res.json({
                data
            })
        })
        .catch(err=>res.status(400).json({err}))
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