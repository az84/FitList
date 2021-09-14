const { Workout } = require('../models');

const workoutData = [
    {
      "workout_name": "pushups",
      "excercise": "excercise!",
      "sets": "4",
      "reps": "12"
    },
    {
      "workout_name": "situps",
      "excercise": "excercise?",
      "sets": "5",
      "reps": "15"
    },
    {
      "workout_name": "crunches",
      "excercise": "excercise!?",
      "sets": "3",
      "reps": "10"
    },
    {
      "workout_name": "chin ups",
      "excercise": "excercise!?!",
      "sets": "5",
      "reps": "12"
    },
    {
      "workout_name": "squats",
      "excercise": "not a excercise",
      "sets": "2",
      "reps": "20"
    }
  ];

  const seedWorkout = () => Workout.bulkCreate(workoutData);

  module.exports = seedWorkout;
  