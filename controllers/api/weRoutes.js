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
    const workoutData = await WorkoutExercise.update({}, {
      where: {
        id: req.params.id
      }
    });
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
    .then(WorkoutExerciseApi => {
      if (!WorkoutExerciseApi) {
        res.status(404).json({
          message: 'No Workout Exercise found with this id'
        });
        return;
      }
      res.json(userApi);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, async (req, res) => {
  console.log("req.body workoutexercise post ", req.body);

  Workout.create({
      user_id: req.session.user_Id,
      workout_name: req.body.workoutname,
      date: req.body.date,
      exercises: [{
          name: req.body.name,
          category: req.body.category,
          equipment: req.body.equipment,
          type: req.body.type,
          muscle: req.body.muscle,
          sets: Number(req.body.sets),
          reps: Number(req.body.reps),
          weight: Number(req.body.weight),
          distance: Number(req.body.distance),
          duration: Number(req.body.duration),
        },
        {
          name: req.body.nameone,
          category: req.body.categoryone,
          equipment: req.body.equipmentone,
          type: req.body.typeone,
          muscle: req.body.muscleone,
          sets: req.body.setsone,
          reps: Number(req.body.repsone),
          weight: Number(req.body.weightone),
          distance: Number(req.body.distanceone),
          duration: Number(req.body.durationone),
        }
      ]
    }, {
      include: [Exercise]
    })
    .then(workoutData => res.json(workoutData)).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;