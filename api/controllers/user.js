const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/User')

//Register
const register = (req,res,next)=>{
    //Cryption
    bcrypt.hash(req.body.password,10,(err,hash)=>{
        if(err){
            res.json({error:err})
        }
    //bcrpyt
    //bcrypt brace found the bottom
    

    //User model object
    let user = new User({
        email:req.body.email,
        username:req.body.username,
        password:hash

    })
    
    let email = req.body.email
    let username = req.body.username
    //Email exist check
    User.findOne({email})
        .then((emailExist)=>{
            if(emailExist){
                res.json({message:"Email exits"})
            }
            else{
                //Username exist
                User.findOne({username})
                .then((usernameExist)=>{
                    if(usernameExist){
                        res.json({message:"Username exist"})
                    }
                    else{
                        //Save data
                        user.save()
                            .then((result)=>{
                                res.json({
                                    message:"User created successfully",
                                    user: result
                                })
                            })
                            .catch((err)=>{
                                res.json({message:err})
                            })
                    }   // Username exist else
                
                })
            }   // Email exist else
        })
    })// bcrypt brace... 
}



//Login
const login = (req,res,next)=>{
    let username = req.body.username
    let password = req.body.password
    
    User.findOne({username})
        .then(user=>{
            if(user){
                bcrypt.compare(password, user.password, (err,result)=>{
                    if(err){
                        res.json({message:"Error occured"})
                    }

                    if(result){
                        let token = jwt.sign({username:user.username, id:user._id,},'SECRET', {expiresIn: '2h'})
                        res.json({
                            message:"Login successful",
                            token
                        })
                    }
                    else{
                        res.json({message:"Login failed"})
                    }

                })
            }
            else{
                res.json({message:"User not found"})
            }
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
    login,
    register,
    reset,
    all
}