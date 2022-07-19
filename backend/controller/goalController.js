const express =require('express');
const asyncHandler= require('express-async-handler')

//@description - Get goals
//@route GET api/goals
//@access Private 
const getGoals= asyncHandler(async(req,res)=>{
    res.status(200).json({message:"get goal"})
})

//@description - Set goals
//@route POST api/goals
//@access Private 

const setGoals= asyncHandler(async(req,res)=>{
    if(!req.body.text){
        res.status(400) 
        throw new Error('please enter data')
    }
    res.status(200).json({message:"set goal"})
})

//@description - Update goals
//@route         PUT api/goals/:id
//@access        Private 

const updateGoals= asyncHandler(async(req,res)=>{
    res.status(200).json({message:`update goal with id ${req.params.id}`})
})

//@description - Delete goals
//@route         DELETE api/goals/:id
//@access        Private 

const deleteGoals= asyncHandler(async(req,res)=>{
    res.status(200).json({message:`delete goal with id ${req.params.id}`})
})

module.exports={getGoals,setGoals,updateGoals,deleteGoals}