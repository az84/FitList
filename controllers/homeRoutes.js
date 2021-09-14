const router = require('express').Router();
const { User, Workout } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const workoutData = await Workout.findAll({
			include: [
				{
						model: User,
						attributes: ['username', 'id']
				},
			]
		});
    //console.log("workoutdata", workoutData);

    const workouts = workoutData.map((workout) => workout.get({ plain: true }));
    //console.log("workouts", workouts);
    
    res.render('homepage', {
      workouts,
      loggedIn: req.session.loggedIn,
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

router.get('/test', (req, res) => {
	if (req.session.loggedin) {
		res.redirect('/test');
		return;
	}
  res.render('test', {
		loggedin: req.session.loggedin,
    User_Id: req.session.user_Id
	});
});

module.exports = router;
