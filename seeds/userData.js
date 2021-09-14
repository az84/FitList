const { User } = require('../models');

const userData = [
    {
      "name": "Sal",
      "email": "sal@hotmail.com",
      "password": "password12S"
    },
    {
      "name": "Lernantino",
      "email": "lernantino@gmail.com",
      "password": "password12L"
    },
    {
      "name": "Amiko",
      "email": "amiko2k20@aol.com",
      "password": "password12A"
    },
    {
      "name": "Jordan",
      "email": "jordan99@msn.com",
      "password": "password12J"
    },
    {
      "name": "Blake",
      "email": "the_blake@yahoo.com",
      "password": "password12B"
    }
  ];

  const seedUser = () => User.bulkCreate(userData);

  module.exports = seedUser;
  