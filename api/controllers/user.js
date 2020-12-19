const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('config')

const User = require('../models/User')

//Register
const register = (req,res,next)=>{
    const {name, email, password} = req.body

    if(!name || !email || !password){
        return res.status(400).json({msg:'Please enter all fields'})
    }

    User.findOne({email})
        .then(user=>{
            if(user) return res.status(400).json({msg:'User already exist'})
        })
    
    const newUser = new User({
        name,
        email,
        password
    })

    bcrypt.genSalt(10,(err, salt)=>{
        bcrypt.hash(newUser.password, salt,(err, hash)=>{
            if(err) throw err
            newUser.password=hash
            newUser.save()
                .then(user=>{

                    jwt.sign(
                        {id: user.id},
                        config.get('jwtSecret'),
                        {expiresIn:3600},
                        (err,token)=>{
                            if(err) throw err

                            res.json({
                                token,
                                user:{
                                    id:user.id,
                                    name:user.name,
                                    email:user.email
                                }
                            })
                        }
                    )
                })
        })
        
    })

}



//Login
const login = (req,res,next)=>{
    const {name, email, password} = req.body

    if(!email || !password){
        return res.status(400).json({msg:'Please enter all fields'})
    }

    User.findOne({email})
        .then(user=>{
            if(!user) return res.status(400).json({msg:'User does not exist'})

            bcrypt.compare(password, user.password)
                .then(isMatch=>{
                    if(!isMatch) return res.status(400).json({msg:'Invalid credentials'})

                    jwt.sign(
                        {id: user.id},
                        config.get('jwtSecret'),
                        {expiresIn:3600},
                        (err,token)=>{
                            if(err) throw err

                            res.json({
                                token,
                                user:{
                                    id:user.id,
                                    name:user.name,
                                    email:user.email
                                }
                            })
                        }
                    )
                })
        })

}



const loaduser = (req,res,next)=>{
    User.findById(req.user.id)
        .select('-password')
        .then(user=>{
            res.json(user)
        })
}








const reset = (req,res,next)=>{
    let username = req.params.username 

    if(username==req.user.username){
        let oldpass = req.body.oldpass
    let newpass = req.body.newpass

    User.findOne({username})
        .then(user=>{
            if(user){
                bcrypt.compare(oldpass, user.password, (err,result)=>{
                    if(err){
                        res.json({
                            message:'Old password not match'
                        })
                    }

                    if(result){
                        bcrypt.hash(newpass,10,(err,hash)=>{
                            if(err){
                                res.json({message:err})
                            }

                            let updatePass ={
                                email:user.email,
                                username,
                                password:hash
                            }

                            User.findByIdAndUpdate(user.id,{$set: updatePass})
                                .then(newUser=>{
                                    User.findById(newUser._id)
                                        .then(updatedUser=>{
                                            res.json({
                                                message:'Password updated',
                                                updatedUser
                                            })
                                        })
                                        .catch(err=>{
                                            res.json({
                                                message:err
                                            })
                                        })
                                    // res.json({
                                    //     message:'Password update',
                                    //     newUser
                                    // })
                                })
                                .catch(err=>{
                                    res.json({
                                        message:err
                                    })
                                })
                        })
                    }
                })
            }
            else{
                res.json({
                    message:'User not found'
                })
            }
        })
        .catch(err=>{
            res.json({
                message: err
            })
        })
    }
    else{
        res.json({
            message:'Unauthorized access'
        })
    }
}



//All
const all = (req,res,next)=>{
    User.find()
        .then(users=>{
            res.json({
                users
            })
        })
        .catch(err=>{
            res.json({
                err
            })
        })
}


module.exports = {
    register,
    login,
    loaduser,
    reset,
    all
}