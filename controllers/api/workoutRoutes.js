const router = require('express').Router();
const { Workout } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, (req, res) => { // post route for Creating new workout
	console.log("req.body", req.body);
	console.log("req.session.user_Id", req.session.user_Id);
	Workout.create({
		workout_name: req.body.workoutName,
		exercise: req.body.exercise,
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
