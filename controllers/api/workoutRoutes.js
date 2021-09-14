const router = require('express').Router();
<<<<<<< HEAD
const { response } = require('express');
const { User, Workout } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Workout.findAll({
        attributes: ['id', 'workout_name', 'exercise', 'sets', 'reps'],
        order: [['created_at', 'DESC']],
        include: [
        {
          model: User,
          attributes: ['username']
        },
      ]
    })
      .then(dbWorkoutData => res.json(dbWorkoutData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/:id', (req, res) => {
    Workout.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id', 'workout_name', 'created_at', 'exercise'],
      include: [
        {
          model: User,
          attributes: ['username']
        }, {
          model: Workout,
          attributes: ['id', 'workout_name', 'created_at', 'exercise'],
          include: {
            model: User,
            attributes: ['username']
          }
        }
      ]
    })
      .then(dbWorkoutData => {
        if (!dbWorkoutData) {
          res.status(404).json({ message: 'No workout card with this id' });
          return;
        }
        res.json(dbWorkoutData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.post('/', withAuth, (req, res) => {
    Workout.create({
      workout_name: req.body.workout_name,
      exercise: req.body.content,
      sets: req.body.sets,
      reps: req.bosy.reps
    })
      .then(dbWorkoutData => res.json(dbWorkoutData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.put('/:id', withAuth, (req, res) => {
    Workout.update({
        workout_name: req.body.workout_name,
        exercise: req.body.exercise,
        sets: req.body.sets,
        reps: req.bosy.reps
      },
      {
        where: {
          id: req.params.id
        }
      })
      .then(dbWorkoutData => {
        if (!dbWorkoutData) {
          res.status(404).json({ message: 'No workout card with this id' });
          return;
        }
        res.json(dbWorkoutData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.delete('/:id', withAuth, (req, res) => {
    Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbWorkoutData => {
        if (!dbWorkoutData) {
          res.status(404).json({ message: 'No workout card with this id' });
          return;
        }
        res.json(dbWorkoutData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  module.exports = router;
=======
const { User, Workout } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, (req, res) => { // post route for Creating new workout
	console.log("req.body", req.body);
	console.log("req.session.user_Id", req.session.user_Id);
	Workout.create({
		workout_name: req.body.workoutName,
		excercise: req.body.excercise,
		sets: req.body.sets,
		reps: req.body.reps,
		user_id: req.session.user_Id
	}).then(workoutData => res.json(workoutData)).catch(err => {
		console.log(err);
		console.log("workoutData", workoutData);
		res.status(500).json(err);
	});
});

router.delete('/:id', async (req, res) => { //Delete route to delete a workout
	try {
		const WorkoutData = await Workout.destroy({
			where: {id: req.params.id}
		});
		if (!WorkoutData) {
			res.status(404).json({ message: 'No Workout found with this id!'});
			return;
		}
		res.status(200).json(WorkoutData);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.put('/:id', async (req, res) => { // put Route to update workout
	try {
		const workout = await Workout.update({
                // Stuff!
		}, { where: { id: req.params.id } });
		res.status(200).json(workout);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
>>>>>>> 849628202fed2f83d9f2c7f1ced5b28722cbfba6
