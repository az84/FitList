const seedUser = require('./userData');
const seedWorkout= require('./workoutData');


const sequelize = require('../config/connection');

const seedAll = async() => {
  await sequelize.sync({ force: true });
  await seedUser();
  await seedWorkout();
  process.exit(0);
};

seedAll();