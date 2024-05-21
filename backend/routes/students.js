const expresss= require('express')
const bodyparser=require('body-parser')
const studentmodel=require('../models/model')
const router = expresss.Router()
router.use(bodyparser.json())

router.get('/',(req,res)=>{
    res.send("student-page")
})

router.post('/post',(req,res)=>{
    console.log(req.body)
    res.send("posting page")
    const newstudent = new studentmodel(req.body)
    newstudent.save()
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
   
})

router.get('/get',(req,res)=>{
    studentmodel.find()
    .then(response=>res.send(response))
    .catch(err=>console.log(err))
    
})

router.get('/get/:id',(req,res)=>{
    studentmodel.findById()
    .then(response=>res.send(response))
    .catch(err=>console.log(err))
   
})

router.put('/update/:id',(req,res)=>{
    studentmodel.findByIdAndUpdate(req.params.id,req.body)
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
   
})

router.delete('/delete/:id',(req,res)=>{
    studentmodel.findByIdAndDelete(req.params.id)
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
})

module.exports=router


