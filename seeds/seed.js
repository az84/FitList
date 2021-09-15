const sequelize = require('../config/connection');
const { User, Workout, Exercise, WorkoutExercise } = require('../models');
const userData = require('./userData.json');
const workoutData = require('./workoutData.json');
const exerciseData = require('./exerciseData.json');
const workoutexercise = require('./workoutExerciseData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Workout.bulkCreate(workoutData, {});

  await Exercise.bulkCreate(exerciseData, {});

  await WorkoutExercise.bulkCreate(workoutexercise, {});

  process.exit(0);
};

seedDatabase();