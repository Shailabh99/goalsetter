const path = require('path')
const cors= require ('cors')
const express = require('express');
const dotenv= require('dotenv').config();
const {errorHandler}=require('./middleware/errorMiddleware')
const colors=require('colors')
const connectMongoDb= require('./config/database')

const port=process.env.PORT||5000
connectMongoDb()
const app =express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended :false}))


app.use('/api/goals',require("./routes/goalRoutes"))
app.use('/api/users',require('./routes/userRoutes'))

// Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
  
    app.get('*', (req, res) =>
      res.sendFile(
        path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
      )
    );
  } else {
    app.get('/', (req, res) => res.send('Please set to production'));
  }
  
app.use(errorHandler)

app.listen(port,()=>console.log(`server is listening at PORT ${port}`));
