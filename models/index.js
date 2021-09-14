const User = require('./User');
const Workout = require('./Workout');

Workout.belongsTo(User, {

});

User.hasMany(Workout, {

});

module.exports = { User, Workout };
