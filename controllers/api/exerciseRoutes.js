const router = require('express').Router();
const { Exercise,Workout } = require('../../models');


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
        .then(workoutApi => res.json(workoutApi))
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
            model: Category,
            attributes: ['workout_name']
        },

        ]
    })
        .then(workoutApi => {
            if (!workoutApi) {
                res.status(404).json({ message: 'No product found with this id' });
                return;
            }
            res.json(workoutApi);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// create new exercise

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
        .then(workoutApi => {
            if (!workoutApi) {
                rs.status(404).json({ message: 'not found' });
                return;
            }
            res.json(workoutApi);
        })
        .catch(err => {
            res.status(500).json(err);
        });

});

module.exports = router;