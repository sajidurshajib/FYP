const Data = require('../models/Data')

const set = (req,res,next)=>{
    res.json({msg:'Hello Data'})
}

module.exports = {
    set
}