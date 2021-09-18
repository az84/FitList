const router = require('express').Router();
const userRoutes = require('./userRoutes');
const workoutRoutes = require('./workoutRoutes');
const excerciseRoutes = require('./exerciseRoutes');
const weRoutes = require('./weRoutes');

router.use('/users', userRoutes);
router.use('/exercise', excerciseRoutes);
router.use('/workout', workoutRoutes);
router.use('/we', weRoutes);

module.exports = router;
