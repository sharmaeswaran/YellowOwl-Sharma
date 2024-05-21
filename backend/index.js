const express=require('express')
const mongoose= require('mongoose')
const Student=require('./routes/students')
const app=express()
const cors=require('cors')

app.use(cors())
mongoose.connect('mongodb://127.0.0.1:27017/yelloOwl')
mongoose.connection.on("connected",()=>{
    console.log("Mongo db connected successfully")
})

app.get('/',(req,res)=>{
    res.send("home page")
})

app.use('/students',Student)

app.listen(3001,()=>{
    console.log("server running on port 3001")
})

