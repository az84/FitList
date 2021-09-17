const router = require('express').Router();
const { Exercise, Workout } = require('../../models');


// get all exercise
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

// get one exercise
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

// create new exercise
// router.post('/', (req, res) => {
//     Exercise.create({
//             name: req.body.name,
//             category: req.body.category,
//             equipment: req.body.equipment,
//             type: req.body.type,
//             msucle: req.body.muscle, 
//             sets: req.body.sets,
//             reps: req.body.sets,
//             weight: req.body.weight,
//             distance: req.body.distance,
//             duration: req.body.duration
//         })
//         .then(exerciseData => res.json(exerciseData))
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

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
  

// update exercise
router.put('/:id', async (req, res) => {
    try {
        const exerciseApi = await Exercise.update({
            // Stuff!
        }, { where: { id: req.params.id } });
        res.status(200).json(exerciseApi);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

router.delete('/:id', (req, res) => {
    // delete one product by its `id` value
    Exercise.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(exerciseApi => {
            if (!exerciseApi) {
                rs.status(404).json({ message: 'not found' });
                return;
            }
            res.json(exerciseApi);
        })
        .catch(err => {
            res.status(500).json(err);
        });

});

module.exports = router;