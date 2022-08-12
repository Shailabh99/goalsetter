const mongoose= require('mongoose')

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please enter the name'], 
    },
    email:{
        type:String,
        required:[true,'Please enter the email'], 
    },
    password:{
        type:String,
        required:[true,'Please enter the password'], 
    }
},{timestamps:true})

module.exports= mongoose.model('User',userSchema)