const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')


//all workout
const getWorkouts = async (req,res)=>{

    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}

//single workout
const getWorkout = async (req,res)=>{

    const{ id } =req.params

    if(!mongoose.Types.ObjectId.isValid(id)){

        return res.status(404).json({error : 'no workout'})
    }

    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(400).json({error : 'no workout'})
    }

    res.status(200).json(workout)
}

//create workout

const createWorkout = async (req, res) => {
    const {title, load, qty} = req.body
  
    let emptyFields = []
  
    if (!title) {
      emptyFields.push('title')
    }
    if (!load) {
      emptyFields.push('load')
    }
    if (!qty) {
      emptyFields.push('qty')
    }
    if (emptyFields.length > 0) {
      return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
    }
    
  try {
    const workout = await Workout.create({title, load, qty})
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}


const updateworkout = async (req,res)=>{
const{ id } =req.params

    if(!mongoose.Types.ObjectId.isValid(id)){

        return res.status(404).json({error : 'no workout'})
    }

    const workout = await Workout.findOneAndUpdate({_id: id},{...req.body})

    if(!workout){
        return res.status(400).json({error : 'no workout'})
    }

    res.status(200).json(workout)

}

const deleteworkout = async (req,res)=>{
const{ id } =req.params

    if(!mongoose.Types.ObjectId.isValid(id)){

        return res.status(404).json({error : 'no workout'})
    }

    const workout = await Workout.findOneAndDelete({_id: id})

    if(!workout){
        return res.status(400).json({error : 'no workout'})
    }

    res.status(200).json(workout)

}

module.exports={
    createWorkout,
    getWorkouts,
    getWorkout,
    updateworkout,
    deleteworkout
}