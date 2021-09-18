const router = require('express').Router();
const { Workout, Exercise} = require('../../models');
const withAuth = require('../../utils/auth');

// post route for Creating new workout
router.post('/', withAuth, async (req, res) => { 
	console.log("req.body Workout post ", req.body);
	
	await Workout.create({
		user_id: req.session.user_Id,
		workout_name: req.body.workoutname,
		date: req.body.date,
		exercises: [
			{ name: req.body.name, 
				category: req.body.category,
				equipment: req.body.equipment,
				type: req.body.type,
				muscle: req.body.muscle,
				sets: Number(req.body.sets),
				reps: Number(req.body.reps),
				weight: Number(req.body.weight),
				distance: Number(req.body.distance),
				duration: Number(req.body.duration) },
		]
	}, {include: [ Exercise ]})
	.then(workoutData => res.json(workoutData)).catch(err => {
		console.log(err);
		res.status(500).json(err);
	});
});



// testing upsert
router.post('/w', withAuth, async (req, res) => { 
	console.log("req.body Workout post ", req.body);
	
	 const [instance, created] = await Workout.upsert({
		user_id: req.session.user_Id,
		workout_name: req.body.workoutname,
		date: req.body.date,
		exercises: [
			{ name: req.body.name, 
				category: req.body.category,
				equipment: req.body.equipment,
				type: req.body.type,
				muscle: req.body.muscle,
				sets: Number(req.body.sets),
				reps: Number(req.body.reps),
				weight: Number(req.body.weight),
				distance: Number(req.body.distance),
				duration: Number(req.body.duration) },
		]
	}, {include: [ Exercise ]})
	.then(instance => res.json(instance)).catch(err => {
		console.log(err);
		res.status(500).json(err);
	});
	console.log("Created", created);
});



// post route for gettingh all workouts
	router.get('/', (req, res) => {

		Workout.findAll({
			attributes: ['id', 'user_id', 'workout_name', 'date'],
		})
			.then(workoutApi => res.json(workoutApi))
			.catch(err => {
				res.status(500).json(err);
			});
	});

// post route for getting one workout
	router.get('/:id', (req, res) => {

		Workout.findOne({
			where: {
				id: req.params.id
			},
			attributes: ['id', 'user_id', 'workout_name']
		})
			.then(workoutApi => {
				if (!workoutApi) {
					res.status(404).json({ message: 'No workout found with this id' });
					return;
				}
				res.json(workoutApi);
			})
			.catch(err => {
				console.log(err);
				res.status(500).json(err);
			});
	});

// post route for deleting workout by id
router.delete('/:id', async (req, res) => {
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

// post route for updating a workout
router.put('/:id', async (req, res) => {
	try {
		const workoutData = await Workout.update({
		}, { where: { id: req.params.id } });
		res.status(200).json(workoutData);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
