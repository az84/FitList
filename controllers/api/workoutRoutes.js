const router = require('express').Router();
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