const express =require('express');
const asyncHandler= require('express-async-handler')
const Goals=require('../models/goalsModel')

//@description - Get goals
//@route GET api/goals
//@access Private 
const getGoals= asyncHandler(async(req,res)=>{
    const goals= await Goals.find()
    res.status(200).json(goals)
})

//@description - Set goals
//@route POST api/goals
//@access Private 

const setGoals= asyncHandler(async(req,res)=>{
    if(!req.body.text){
        res.status(400) 
        throw new Error('please enter data')
    }
    const goal=await Goals.create({
        text: req.body.text
    }
    )
    res.status(200).json(goal)
})

//@description - Update goals
//@route         PUT api/goals/:id
//@access        Private 

const updateGoals= asyncHandler(async(req,res)=>{
    const goal= await Goals.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('goal not found')
    }
    const updateGoal=await Goals.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(updateGoal)
})

//@description - Delete goals
//@route         DELETE api/goals/:id
//@access        Private 

const deleteGoals= asyncHandler(async(req,res)=>{
    const goal=await Goals.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('goal not found')
    }

    await goal.remove();
   //  or we can also use {const deleteGoal= await Goals.findByIdAndDelete(req.params.id)}
     
    res.status(200).json({id: req.params.id})
})

module.exports={getGoals,setGoals,updateGoals,deleteGoals}