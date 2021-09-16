const router = require('express').Router();
const userRoutes = require('./userRoutes');
const workoutRoutes = require('./workoutRoutes');
const excerciseRoutes = require('./exerciseRoutes');

router.use('/users', userRoutes);
router.use('/exercise', excerciseRoutes);
router.use('/workouts', workoutRoutes);

module.exports = router;
