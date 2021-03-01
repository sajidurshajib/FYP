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
        .catch(err=>res.status(400).json({msg:err}))
}


//New profile
const newProfile = (req,res,next)=>{

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
            console.log(data)
            res.json({
                profile:data
            })
        })
        .catch(err=>{
            res.status(400).json({msg:err})
        })
}


//Edit profile
const editProfile = (req,res,next)=>{
    const id = req.user.id

    const {image,occupation,position,header,bio,email,twitter,linkedin,github} = req.body

    let updateProfile = {
        // image:req.body.image,
        // occupation:req.body.occupation,
        // position:req.body.position,
        // header:req.body.header,
        // bio:req.body.bio,
        // email:req.body.email,
        // twitter:req.body.twitter,
        // linkedin:req.body.linkedin,
        // github:req.body.github
    }

        if(image){updateProfile['image']=image}
        if(occupation){updateProfile['occupation']=occupation}
        if(position){updateProfile['position']=position}
        if(header){updateProfile['header']=header}
        if(bio){updateProfile['bio']=bio}
        if(email){updateProfile['email']=email}
        if(twitter){updateProfile['twitter']=twitter}
        if(linkedin){updateProfile['linkedin']=linkedin}
        if(github){updateProfile['github']=github}

        console.log(updateProfile)

    Profile.findOneAndUpdate({user_foreign:id},updateProfile, {new:true})
        .then(data => {
            console.log(data)
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
}

module.exports = {
    all,
    singleProfile,
    newProfile,
    editProfile
}