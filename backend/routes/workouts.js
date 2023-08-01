const express = require('express')
// const Workout = require('../models/workoutModel')


const {
  createWorkout,
  getWorkouts,
  getWorkout,
  updateworkout,
  deleteworkout
}= require('../controllers/workoutController')

const router = express.Router()

// GET all workouts
router.get('/', getWorkouts)

// GET a single workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/',createWorkout)

// DELETE a workout
router.delete('/:id',deleteworkout)

// UPDATE a workout
router.patch('/:id', updateworkout)

module.exports = router

