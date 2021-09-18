const router = require('express').Router();
const { Workout, Exercise, WorkoutExercise} = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {

  WorkoutExercise.findAll({
    
  })
    .then(We => res.json(We))
    .catch(err => {
      res.status(500).json(err);
    });
});

router.put('/:id', async (req, res) => {
	try {
		const workoutData = await WorkoutExercise.update({
		}, { where: { id: req.params.id } });
		res.status(200).json(workoutData);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/:id', (req, res) => {

  WorkoutExercise.findOne({
    where: {
      id: req.params.id
    },
  })
    .then(userApi => {
      if (!userApi) {
        res.status(404).json({ message: 'No User found with this id' });
        return;
      }
      res.json(userApi);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/', (req, res) => {

  WorkoutExercise.findAll({
    
  })
    .then(We => res.json(We))
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;