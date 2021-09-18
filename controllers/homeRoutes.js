const router = require('express').Router();
const { User, Workout, Exercise, WorkoutExercise } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const workoutData = await Workout.findAll({
      include: [{
          model: Exercise,
          through: WorkoutExercise,
        },
        {
          model: User,
          attributes: ['username', 'id']
        }
      ]
    });
    const workouts = workoutData.map((workout) => workout.get({ plain: true }));
    res.render('homepage', {
      workouts,
      loggedIn: req.session.loggedIn,
      currentUser: req.session.username,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', withAuth, async (req, res) => {
  try {
    const workoutData = await Workout.findAll({
      include: [{
          model: User,
          attributes: ['username', 'id'],
          where: {
            id: req.session.user_Id
          }
        },
        {
          model: Exercise,
          attributes: ['name', 'category', 'equipment', 'type', 'muscle', 'sets', 'reps', 'weight',
            'distance', 'duration'
          ],
          through: WorkoutExercise,
        }
      ]
    });

    const workouts = workoutData.map((workout) => workout.get({
      plain: true
    }));

    res.render('profile', {
      workouts,
      loggedIn: req.session.loggedIn,
      User_Id: req.session.user_Id,
      currentUser: req.session.username,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});


router.get('/exercise', withAuth, async (req, res) => {
  try {
    const exerciseData = await Exercise.findAll({
      attributes: ['id', 'name', 'category', 'equipment', 'type', 'muscle', 'sets', 'reps', 'weight', 'distance', 'duration']
    });
    const exercises = exerciseData.map(exercise => exercise.get({
      plain: true
    }));
    res.render('exercise', {
      exercises,
      loggedIn: req.session.loggedIn,
      User_Id: req.session.user_Id,
      currentUser: req.session.username,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/createworkout', withAuth, async (req, res) => {
  try {
    const exerciseData = await Exercise.findAll({
      attributes: ['id', 'name', 'category', 'equipment', 'type', 'muscle', 'sets', 'reps', 'weight', 'distance', 'duration']
    });
    const exercises = exerciseData.map(exercise => exercise.get({
      plain: true
    }));
    res.render('createworkout', {
      exercises,
      loggedIn: req.session.loggedIn,
      User_Id: req.session.user_Id,
      currentUser: req.session.username,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;