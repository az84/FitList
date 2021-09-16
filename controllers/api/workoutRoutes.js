const router = require('express').Router();
const { Workout, Exercise, WorkoutExercise } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => { // post route for Creating new workout
	console.log("req.body", req.body);
	console.log("req.session.user_Id", req.session.user_Id);
	Workout.create({
		user_id: req.session.user_Id,
		workout_name: req.body.workoutName,
		date: req.body.date
	}).then(workoutData => res.json(workoutData)).catch(err => {
		console.log(err);
		res.status(500).json(err);
	});
	
	Exercise.create({
		name: req.body.name, // exercise name\
		category: req.body.category,
		equipment: req.body.equipment,
		type: req.body.type,
		muscle: req.body.muscle,
		sets: req.body.sets,
		reps: req.body.reps,
		weight: req.body.weight,
		distance: req.body.distance,
		duration: req.body.duration
	}).then(exerciseData => res.json(exerciseData)).catch(err => {
		console.log(err);
		console.log("exerciseData!", exerciseData);
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
