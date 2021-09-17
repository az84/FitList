const router = require('express').Router();
const { Workout, Exercise, WorkoutExercise } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => { // post route for Creating new workout
	console.log("req.body Workout post ", req.body);

	Workout.create({
		user_id: req.session.user_Id,
		workout_name: req.body.workoutName,
		date: req.body.date,
		exercises: [
			{ name: req.body.name, // exercise name\
				category: req.body.category,
				equipment: req.body.equipment,
				type: req.body.type,
				muscle: req.body.muscle,
				sets: Number(req.body.sets),
				reps: Number(req.body.reps),
				weight: Number(req.body.weight),
				distance: Number(req.body.distance),
				duration: Number(req.body.duration) },
			//{  } 
		]
	}, {include: [ Exercise ]})
	.then(workoutData => res.json(workoutData)).catch(err => {
		console.log(err);
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
