const router = require('express').Router();
const { User, Workout } = require('../../models');
//const withAuth = require('../../utils/auth');


router.post('/', withAuth, (req, res) => {
	Workout.create({
        //stuff!
	}).then(workoutData => res.json(workoutData)).catch(err => {
		console.log(err);
		res.status(500).json(err);
	});
});

router.delete('/:id', withAuth, async (req, res) => {
	try {
		const WorkoutData = await Workout.destroy({
			where: {
                    //stuff!
			}
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

router.put('/:id', withAuth, async (req, res) => {
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
