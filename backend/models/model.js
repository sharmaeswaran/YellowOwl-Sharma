const mongoose=require('mongoose')
const studentSchema=new mongoose.Schema({
    name:String,
    email:String,
    phonenumber:Number,
    endrollnumber:Number,
    dateofadmission:String
})
const studentmodel=mongoose.model('students',studentSchema)
module.exports=studentmodel