const mongoose= require('mongoose')

const goalsSchema= new mongoose.Schema({
   text:{
    type:String,
    required:[true,'please enter the goals']
   }, 
  },
  {timestamps:true,
  }
)

module.exports= mongoose.model('Goals',goalsSchema)