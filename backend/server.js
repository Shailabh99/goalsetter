
const express = require('express');
const dotenv= require('dotenv').config();
const {errorHandler}=require('./middleware/errorMiddleware')
const colors=require('colors')
const connectMongoDb= require('./config/database')
const port=process.env.PORT||5000
connectMongoDb()

const app= express();
app.use(express.json())
app.use(express.urlencoded({extended :false}))

app.use('/api/goals',require("./routes/goalRoutes"))
app.use('/api/users',require('./routes/userRoutes'))
app.use(errorHandler)

app.listen(port,()=>console.log(`server is listening at PORT ${port}`));
