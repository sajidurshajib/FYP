const express = require('express')
const morgan = require('morgan')
// const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')




// Database
const deprecatedDB = { 
    useNewUrlParser: true, 
    useFindAndModify: false,
    useCreateIndex:true,
    useUnifiedTopology: true 
}
mongoose.connect('mongodb://localhost/dv_db',deprecatedDB)

const db = mongoose.connection

db.on('error',(err)=>{
    console.log(err)
})

db.once('open',()=>{
    console.log('Database connection established')
})


//Express
const app = express()


//Middleware
app.use(morgan('dev'))
app.use(cors())

app.use(express.urlencoded({extended:false}))
app.use(express.json())


//Routes import
const userRoute = require('./api/routes/user')
const userProfile = require('./api/routes/profile')
const dynamicForm = require('./api/routes/form')
const dataRoute = require('./api/routes/data')

//Route middleware
app.use('/api/user', userRoute)
app.use('/api/profile', userProfile)
app.use('/api/form', dynamicForm)
app.use('/api/data', dataRoute)

// Main route
app.get('/',(req,res,next)=>{
    res.json({
        message:"Route Root"
    })
})

// Run server
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})