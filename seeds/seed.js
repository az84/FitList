const sequelize = require('../config/connection');
const { User, Workout, Exercise } = require('../models');
const userData = require('./userData.json');
const workoutData = require('./workoutData.json');
const exerciseData = require('./exerciseData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Workout.bulkCreate(workoutData, {});

  await Exercise.bulkCreate(exerciseData, {});

  process.exit(0);
};

seedDatabase();