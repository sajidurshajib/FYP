const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('config')

const User = require('../models/User')

//Register
const register = (req,res,next)=>{
    const {name, email, password, cnf_password} = req.body

    if(!name || !email || !password || !cnf_password){
        return res.status(400).json({msg:'Please enter all fields'})
    }

    if(cnf_password != password){
        return res.status(400).json({msg:'Password not confirmed'})
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
    const {email, password} = req.body
    console.log(email)
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
    all
}