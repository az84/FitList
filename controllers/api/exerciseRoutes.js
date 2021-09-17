const router = require('express').Router();
const { Exercise, Workout } = require('../../models');


// post route for getting all exercises
router.get('/', (req, res) => {

    Exercise.findAll({
        attributes: ['id', 'name', 'equipment', 'type', 'muscle', 'sets', 'reps', 'weight', 'distance', 'duration'],
        include: [{
            model: Workout,
            attributes: ['workout_name']
        },

        ]
    })
        .then(exerciseApi => res.json(exerciseApi))
        .catch(err => {
            res.status(500).json(err);
        });
});

// post route for getting one exercise
router.get('/:id', (req, res) => {

    Exercise.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'name', 'equipment', 'type', 'muscle', 'sets', 'reps', 'weight', 'distance', 'duration'],
        include: [{
            model: Workout,
            attributes: ['workout_name']
        },

        ]
    })
        .then(exerciseApi => {
            if (!exerciseApi) {
                res.status(404).json({ message: 'No exercise found with this id' });
                return;
            }
            res.json(exerciseApi);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// post route for adding a new exercise
router.post('/', async (req, res) => {
    try {
      const newexercise = await Exercise.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newexercise);
    } catch (err) {
      res.status(400).json(err);
    }
  });

//post route for updating an exercise
router.put('/:id', async (req, res) => {
     
    try {
      const exerciseApi = await Exercise.update(
			{   name: req.body.name, 
				category: req.body.category,
				equipment: req.body.equipment,
				type: req.body.type,
				muscle: req.body.muscle,
				sets: Number(req.body.sets),
				reps: Number(req.body.reps),
				weight: Number(req.body.weight),
				distance: Number(req.body.distance),
				duration: Number(req.body.duration)
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(200).json(exerciseApi);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  










// post route for deleting an exercise
router.delete('/:id', (req, res) => {
    Exercise.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(exerciseApi => {
            if (!exerciseApi) {
                rs.status(404).json({ message: 'No exercise found with this id' });
                return;
            }
            res.json(exerciseApi);
        })
        .catch(err => {
            res.status(500).json(err);
        });

});

module.exports = router;