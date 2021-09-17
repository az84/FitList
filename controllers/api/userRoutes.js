const router = require('express').Router();
const {User} = require('../../models');

// post route for creating new user
router.post('/', async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password
    });

    req.session.save(() => {
      req.session.user_Id = newUser.id;
      req.session.username = newUser.username;
      req.session.loggedIn = true;
      res.status(200).json(newUser);
    })
  } catch (err) {
    res.status(500).json(err);
  }
})

// post route for logging in
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });
    
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect  username or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_Id = userData.id;
      req.session.username = userData.username;
      req.session.loggedIn = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// post route for logging out
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
      document.location.replace('/login');
    });
  } else {
    res.status(404).end();
    document.location.replace('/login');
  }
});

// post route for getting all users
router.get('/', (req, res) => {

  User.findAll({
    attributes: ['id', 'username'],
  })
    .then(userApi => res.json(userApi))
    .catch(err => {
      res.status(500).json(err);
    });
});

// post route for getting one user
router.get('/:id', (req, res) => {

  User.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'username'],
  })
    .then(userApi => {
      if (!userApi) {
        res.status(404).json({ message: 'No User found with this id' });
        return;
      }
      res.json(userApi);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// post route for getting deleting a user
router.delete('/:id', (req, res) => {
  User.destroy({
      where: {
          id: req.params.id
      }
  })
      .then(usersApi => {
          if (!usersApi) {
              rs.status(404).json({ message: 'No User found with this id' });
              return;
          }
          res.json(UsersApi);
      })
      .catch(err => {
          res.status(500).json(err);
      });

});

module.exports = router;
