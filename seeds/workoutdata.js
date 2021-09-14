const { Workout } = require('../models');

const workoutData = [
    {
      "workout_name": "Monday Set",
      "excercise": "squats",
      "sets": "4",
      "reps": "12"
    },
    {
      "workout_name": "Tuesday Set",
      "excercise": "planks",
      "sets": "5",
      "reps": "15"
    },
    {
      "workout_name": "Thursday Set",
      "excercise": "pushups",
      "sets": "3",
      "reps": "10"
    },
    {
      "workout_name": "Friday Set",
      "excercise": "chinups",
      "sets": "5",
      "reps": "12"
    },
    {
      "workout_name": "Saturday Set",
      "excercise": "situps",
      "sets": "2",
      "reps": "20"
    }
  ];

  const seedWorkout = () => Workout.bulkCreate(workoutData);

  module.exports = seedWorkout;
  