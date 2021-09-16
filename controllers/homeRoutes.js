const router = require('express').Router();
const { User, Workout, Exercise, WorkoutExercise } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const workoutData = await Workout.findAll({
        include: [
          {
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
    //console.log("workouts", workouts);
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
        include: [
          {
            model: User,
            attributes: ['username', 'id'],
            where: { id: req.session.user_Id }
          },
          {
            model: Exercise,
            attributes: ['name', 'category', 'equipment', 'type', 'muscle', 'sets', 'reps', 'weight',
              'distance', 'duration', 'sets', 'reps'],
            through: WorkoutExercise,
          }
        ]
      });

    const workouts = workoutData.map((workout) => workout.get({ plain: true }));
    //console.log("workouts", workouts);
    
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

router.get('/createworkout', async (req, res) => {
  res.render('createworkout', {
		loggedin: req.session.loggedin,
    User_Id: req.session.user_Id,
    currentUser: req.session.username,
	});
});

module.exports = router;
