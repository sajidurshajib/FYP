const Data = require('../models/Data')
const Profile = require('../models/Profile')

const set = (req,res,next)=>{

    const newData = new Data({
        author_foreign:req.user.id,
        form_foreign:req.body.form_foreign,
        data:req.body.data
    }) 
    newData.save()
        .then(data=>{

            Profile.findOneAndUpdate({user_foreign:req.user.id}, {$inc : {'point' : 2}}, {new: true})
            .then(grab=>{
                res.json({
                    grab,
                    data
                })  
            })
            .catch(e=>{
                return res.status(400).json({msg:e})
            })

            // res.json({
            //     data
            // })
        })
        .catch(err=>{
            console.log(err)
            return res.status(400).json({msg:err})
        })    
}

const find = (req,res,next)=>{
    Data.find({form_foreign:req.params.id})
        .then(data=>{
            res.json({
                data
            })
        })
        .catch(err=>{
            return res.status(400).json({msg:err})
        })
}

module.exports = {
    set,
    find
}