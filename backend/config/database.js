const mongoose=require('mongoose')
const connectMongoDb = ()=>{
    mongoose.connect(process.env.MONGO_URI)
            .then((con)=>console.log(`database is connected to ${con.connection.host}`.cyan.underline))
            .catch((err)=>{console.log('error')})
}

module.exports=connectMongoDb
