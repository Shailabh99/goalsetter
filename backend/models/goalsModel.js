const mongoose= require('mongoose')

const goalsSchema= new mongoose.Schema({
  user:{
    type : mongoose.Schema.Types.ObjectId,
    required:true,
    ref: 'User',
  },
   text:{
    type:String,
    required:[true,'please enter the goals']
   }, 
  },
  {timestamps:true,
  },
)

module.exports= mongoose.model('Goals',goalsSchema)